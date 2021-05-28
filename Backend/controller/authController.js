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
    name: yup.string().required(),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match")

});

const otpSchema = yup.object({
    email: yup.string().required().email(),
    otp : yup.string().required()
});

exports.signup = async (req, res, next) => {
    try {
        const data = await ngoSignupSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        const ngoExist = await Ngo.findOne({ email: data.email });
        if (ngoExist) throw new MyError(409, "User with this email already exists.");


        const hashPassword = bcrypt.hashSync(data.password, 10);
        delete data.password;
        delete data.confirmPassword;
        try {
            const ngo = await Ngo.create({ ...data, password: hashPassword });
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
                from: "sachan.himanshu2001@gmail.com",
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
            console.log(error.message);
            throw new MyError(503, "Mongo Error.");
        }
    } catch (error) {
        next(error);
    }
};

exports.otpVerification = async (req,res,next)=>{
    try {
        const data = await otpSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        const otpExist = await Otp.findOne({email : data.email});

        if(!otpExist) throw new MyError(404, "Otp Expired");

        const ngoExist = await Ngo.findOne({email : data.email});

        if(ngoExist.isVerified === true) throw new MyError(409, "Continue to login already verified");

        if(otpExist.otp !== data.otp) throw new MyError(409, "Wrong Otp");

        const token=JWT.sign({_id:ngoExist._id},process.env.SUPERSECRET,{expiresIn:'6h'});

        ngoExist.isVerified = true;
        await ngoExist.save();

        res.json({
            success: true,
            token : token,
            data : ngoExist
          });

    } catch (error) {
        next(error);
    }
};

exports.resendOtp = async ( req ,res, next) =>{
    try {
        
    } catch (error) {
        next(error)
    }
};