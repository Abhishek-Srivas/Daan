const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const yup = require("yup");
const nodemailer = require("nodemailer")
const nodemailersendgrid = require("nodemailer-sendgrid-transport")
const OtpGenerator = require("otp-generator");
const JWT = require("jsonwebtoken");
const MyError = require("../error/MyError");
const Ngo = require("../model//ngoAuthModel");
const Otp = require("../model/otpModel");

//sengrid
const transporter = nodemailer.createTransport(nodemailersendgrid({
    auth: {
        api_key: process.env.API_KEY
    }
}))

const ngoSignupSchema = yup.object({
    ngoName: yup.string().required(),
    city: yup.string().required(),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    otp: yup.string()
});

const ngoLoginSchema = yup.object().shape({
    email: yup.string().ensure().when('contact', {
        is: '',
        then: yup.string().required()
    }),
    contact: yup.string().ensure().when('email', {
        is: '',
        then: yup.string().required()
    }),
    password: yup.string().required()
}, [['contact', 'email', 'password']]);

exports.signup = async (req, res, next) => {
    try {
        console.log("here");
        const data = await ngoSignupSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        const ngoExist = await Ngo.findOne({ email: data.email });
        if (ngoExist) throw new MyError(409, "User with this email or mobile already exists.Continue to login");

        let otp = OtpGenerator.generate(4, {
            alphabets: false,
            specialChars: false,
            upperCase: false,
        })
        const optdata = await new Otp({
            email: data.email,
            otp: otp
        });
        console.log(otp);
        await optdata.save();

        var mailOptions = {
            from: process.env.Email,
            to: data.email,
            subject: "signup successful",
            html: `<h1>welcome to Daan please verify your email using this otp : ${otp}</h1>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send('error') // if error occurs send error as response to client
            } else {
                console.log('Email sent');
                res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.otpVerification = async (req, res, next) => {
    try {
        const data = await ngoSignupSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        const otpExist = await Otp.findOne({ email: data.email });

        if (!otpExist) throw new MyError(404, "Otp Expired");

        const ngoExist = await Ngo.findOne({
            $or: [
                { contact: data.contact },
                { email: data.email }
            ]
        });

        if (ngoExist) throw new MyError(409, "Continue to login ");

        if (otpExist.otp !== data.otp) throw new MyError(409, "Wrong Otp");

        const hashPassword = bcrypt.hashSync(data.password, 10);
        delete data.password;
        

        try {
            const ngo = await Ngo.create({ ...data, password: hashPassword });
            const token = JWT.sign({ _id: ngo._id }, process.env.SUPERSECRET, { expiresIn: '6h' });
            ngo.token = token;
            await ngo.save();

            await otpExist.delete();
            res.json({
                success: true,
                token: token,
                data: data
            });
        } catch (error) {
            console.log(error.message);
            throw new MyError(503, "Mongo Error.");
        }
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        console.log("hereee")
        console.log(req.body)
        const data = await ngoLoginSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        // console.log(data.password);
            const ngo = await Ngo.findOne({
                $or: [
                    { contact: data.contact },
                    { email: data.email }
                ]
            });

            if (!ngo) throw new MyError(404, "Ngo Not Found");
            //chekc if password entered is correct or not
            if (!bcrypt.compareSync(data.password, ngo.password))
                throw new MyError(403, "Invalid password");


            const token = JWT.sign({ _id: ngo._id }, process.env.SUPERSECRET, { expiresIn: '6h' });
            ngo.token = token;
            await ngo.save();
            res.json({
                success: true,
                token: token,
                data: ngo
            });
    } catch (error) {
        next(error)
    }
};

exports.isAuthCheck = async (req,res,next) =>{
    try {
        res.send("isAuth middleware working")
    } catch (error) {
        next(error);
    }
}