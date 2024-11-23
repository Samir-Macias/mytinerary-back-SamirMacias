import Joi from 'joi-oid'

const updateUserSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .optional()
        .messages({
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LONG'
        }),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional()
        .messages({
            'string.email': 'INVALID_EMAIL'
        }),

    address: Joi.string()
        .min(5)
        .max(30)
        .optional()
        .messages({
            'string.min': 'ADDRESS_TOO_SHORT',
            'string.max': 'ADDRESS_TOO_LONG'
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{7,15}$/)
        .optional()
        .messages({
            'string.pattern.base': 'INVALID_PHONE'
        }),

    password: Joi.string()
        .min(8)
        .max(18)
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        .optional()
        .messages({
            'string.min': 'PASSWORD_TOO_SHORT',
            'string.max': 'PASSWORD_TOO_LONG',
            'string.pattern.base': 'PASSWORD_WEAK'
        }),

    online: Joi.boolean()
        .optional()
        .messages({
            'any.required': 'ONLINE_STATUS_REQUIRED'
        })
}).min(1);

export default updateUserSchema
