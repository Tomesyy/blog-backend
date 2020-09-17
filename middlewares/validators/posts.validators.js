const joi = require('joi');
const Joi = require('joi');


const createPost = async (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        body: Joi.string().required(),
        token: Joi.string().required(),
    })

    try{
        const value = await schema.validateAsync(req.body);
        next();
    } catch(err){
        res.status(400).json({
            status: "error",
            message: "error validating post",
            details: err.message
        })
    }

}

const updatePost = async (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string(),
        body: Joi.string(),
        token: Joi.string().required(),
    })

    try{
        const value = await schema.validateAsync(req.body);
        next();
    } catch(err){
        res.status(400).json({
            status: "error",
            message: "error validating post",
            details: err.message
        })
    }
}

module.exports = {
    createPost,
    updatePost
}