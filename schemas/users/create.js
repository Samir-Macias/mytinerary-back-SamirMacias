import Joi from 'joi-oid';

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30) 
        .required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LONG'
        }),
    
    email: Joi.string()
        .email({ tlds: { allow: false } }) 
        .required()
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.email': 'INVALID_EMAIL'
        }),

    address: Joi.string()
        .min(5)
        .max(30) 
        .required()
        .messages({
            'any.required': 'ADDRESS_REQUIRED',
            'string.empty': 'ADDRESS_REQUIRED',
            'string.min': 'ADDRESS_TOO_SHORT',
            'string.max': 'ADDRESS_TOO_LONG'
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{7,15}$/) 
        .required()
        .messages({
            'any.required': 'PHONE_REQUIRED',
            'string.pattern.base': 'INVALID_PHONE'
        }),

    password: Joi.string()
        .min(8) 
        .max(18) 
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) 
        .required()
        .messages({
            'any.required': 'PASSWORD_REQUIRED',
            'string.min': 'PASSWORD_TOO_SHORT',
            'string.max': 'PASSWORD_TOO_LONG',
            'string.pattern.base': 'PASSWORD_WEAK'
        }),

    online: Joi.boolean() 
        .required()
        .messages({
            'any.required': 'ONLINE_STATUS_REQUIRED'
        }),
});

export default schema;
