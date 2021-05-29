const yup = require("yup");
const MyError = require("../error/MyError");
const Ngo = require("../model//ngoAuthModel");
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
            const ngo = await Ngo.findById(req.query.id)
                .select("-password")
                .skip(limit * (page - 1))
                .limit(limit);

            if (!ngo) throw new MyError(404, "campaign not found");

            res.json({
                success: true,
                data: ngo
            });

        }
        else if (req.query.category && req.query.city) {
            const ngo = await Ngo.find({
                $and: [
                    { city: { $regex: req.query.city } },
                    { category: req.query.category  }
                ]
            }).select("-password")
                .skip(limit * (page - 1))
                .limit(limit);

            if (!ngo) throw new MyError(404, "campaign not found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else if (req.query.city) {
            const ngo = await Ngo.find({ city: { $regex: req.query.city } })
                .select("-password")
                .skip(limit * (page - 1))
                .limit(limit);

            if (!ngo) throw new MyError(404, "campaign not found");

            res.json({
                success: true,
                data: ngo
            });
        }
        else {
            const ngo = await Ngo.find()
                .select("-password")
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

