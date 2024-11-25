import Joi from "joi-oid";

const updateUserSchema = Joi.object({
  firstName: Joi.string()
    .min(1)
    .max(30)
    .messages({
      "string.base": "First name must be a string.",
      "string.empty": "First name cannot be empty.",
      "string.min": "First name must have at least 1 character.",
      "string.max": "First name must not exceed 30 characters.",
    }),

  lastName: Joi.string()
    .min(1)
    .max(30)
    .messages({
      "string.base": "Last name must be a string.",
      "string.empty": "Last name cannot be empty.",
      "string.min": "Last name must have at least 1 character.",
      "string.max": "Last name must not exceed 30 characters.",
    }),

  email: Joi.string()
    .email()
    .messages({
      "string.email": "Email must be a valid email address.",
      "string.empty": "Email cannot be empty.",
    }),

  photoUrl: Joi.string()
    .uri()
    .messages({
      "string.uri": "Photo URL must be a valid URL.",
      "string.empty": "Photo URL cannot be empty.",
    }),

  password: Joi.string()
    .pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{1,12}$/)
    .messages({
      "string.pattern.base": "Password must have at least 1 uppercase letter, 1 special character, and 1 number, with a maximum of 12 characters.",
      "string.empty": "Password cannot be empty.",
    }),

  online: Joi.boolean().messages({
    "boolean.base": "Online must be a boolean.",
  }),

  country: Joi.string().messages({
    "string.empty": "Country cannot be empty.",
  }),
}).or("firstName", "lastName", "email", "photoUrl", "password", "online", "country")
  .messages({
    "object.missing": "At least one field must be provided for update.",
  });

export default updateUserSchema;
