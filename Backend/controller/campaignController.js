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
                success : true,
                data : "campaign created"
            })
        } catch (error) {
            console.log(error);
            throw new MyError(400, "Mongo Error");
        }
    } catch (error) {
        next(error);
    }
};