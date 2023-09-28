import Joi from "joi";

export const registerBodySchema = Joi.object({
    login: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(8).max(255).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,}$')).required(),
    email: Joi.string().min(3).max(255).email().required(),
    firstName: Joi.string().min(3).max(255),
    lastName: Joi.string().min(3).max(255),
    })

export const createPostSchema = Joi.object({
    Post: Joi.object({
      topic: Joi.string().min(10).max(64).required(),
      text: Joi.string().min(10).max(1000).required(),
      userId: Joi.string().required()
    })
});
  