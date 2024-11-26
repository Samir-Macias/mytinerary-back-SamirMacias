import Joi from 'joi-oid';

const userSchema = Joi.object({
    firstName: Joi.string()
      .min(1)
      .max(30)
      .required()
      .messages({
        "string.base": "First name must be a string.",
        "string.empty": "First name is required.",
        "string.min": "First name must have at least 1 character.",
        "string.max": "First name must not exceed 50 characters.",
        "any.required": "First name is required."
      }),
  
    lastName: Joi.string()
      .min(1)
      .max(30)
      .required()
      .messages({
        "string.base": "Last name must be a string.",
        "string.empty": "Last name is required.",
        "string.min": "Last name must have at least 1 character.",
        "string.max": "Last name must not exceed 50 characters.",
        "any.required": "Last name is required."
      }),
  
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Email must be a valid email address.",
        "string.empty": "Email is required.",
        "any.required": "Email is required."
      }),
  
    photoUrl: Joi.string()
     
      .messages({
        "string.uri": "Photo URL must be a valid URL.",
      }),
  
    password: Joi.string()
      .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{1,12}$/)
      .required()
      .messages({
        "string.pattern.base": "Password must have at least 1 uppercase letter, 1 special character, and 1 number, with a maximum of 12 characters.",
        "string.empty": "Password is required.",
        "any.required": "Password is required."
      }),
  
    online: Joi.boolean()
      .messages({
        "boolean.base": "Online must be a boolean.",
      }),
  
    country: Joi.string()
      .required()
      .messages({
        "string.empty": "Country is required.",
        "any.required": "Country is required."
      }),
  });

export default userSchema;
