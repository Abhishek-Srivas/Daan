const yup = require("yup");
const MyError = require("../error/MyError");
const Ngo = require("../model/ngoAuthModel");
const Campaign = require("../model/campaignModel");

const campaignSchema = yup.object({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    photo: yup.string(),
    goal: yup.number().required()
});

exports.createCampaign = async (req, res, next) => {
    try {
        req.ngo;
        const data = await campaignSchema
            .validate({
                ...req.body,
            })
            .catch((err) => {
                throw new MyError(400, err.errors?.[0]);
            });
        try {
            await Campaign.create({
                ...req.body, ngo: req.ngo.id
            });
            res.json({
                success: true,
                data: "campaign created"
            })
        } catch (error) {
            console.log(error);
            throw new MyError(400, "Mongo Error");
        }
    } catch (error) {
        next(error);
    }
};

exports.getCampaigns = async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit * 1 || 50;

        if (req.query.id) {
            const ngo = await Campaign.findOne({ _id: req.query.id })
                .populate("ngo", "-password -token")
                .skip(limit * (page - 1))
                .limit(limit);


            if (!ngo) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else if (req.query.city && req.query.category) {
            const all = await Campaign.find({ category: req.query.category })
                .populate("ngo", "-password -token")
            const ngo = [];
            all.forEach((element) => {
                var cmp = (element.ngo.city).toString();
                cmp = cmp.toLowerCase();
                if (cmp.match((req.query.city.toLowerCase()))) {
                    ngo.push(element);
                }
            });
            if (!ngo) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else if (req.query.category) {
            const all = await Campaign.find({ category: req.query.category })
                .populate("ngo", "-password -token")
            const ngo = [];
            all.forEach((element) => {
                var cmp = (element.ngo.city).toString();
                cmp = cmp.toLowerCase();
                if (cmp.match((req.query.city.toLowerCase()))) {
                    ngo.push(element);
                }
            });
            if (!ngo) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else if (req.query.city) {
            const all = await Campaign.find()
                .populate("ngo", "-password -token")
            const ngo = [];
            all.forEach((element) => {
                var cmp = (element.ngo.city).toString();
                cmp = cmp.toLowerCase();
                if (cmp.match((req.query.city.toLowerCase()))) {
                    ngo.push(element);
                }
            });


            if (!ngo) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else {
            const ngo = await Campaign.find()
                .populate("ngo", "-password -token")
                .skip(limit * (page - 1))
                .limit(limit);


            if (!ngo) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: [...ngo]
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.getNgoCampaign = async (req, res, next) => {
    try {
        const all = await Campaign.find()
                .populate("ngo", "-password -token")
            const campaign = [];
            all.forEach((element) => {
                var cmp = (element.ngo._id).toString();
                cmp = cmp.toLowerCase();
                if (cmp.match((req.query.id.toLowerCase()))) {
                    campaign.push(element);
                }
            });


            if (!campaign) throw new MyError(404, "No campaign found");

            res.json({
                success: true,
                data: campaign
            });

    } catch (error) {
        next(error);
    }
};

exports.delete = async ( req,res,next) =>{
    try {

        if(req.query.id) 
        {
            await Campaign.deleteOne({_id : req.query.id});

            res.json({
                success : true,
                data :"deleted"
            });
        }

        throw new MyError(404,"Provide id")

    } catch (error) {
        next(error);
    }
};