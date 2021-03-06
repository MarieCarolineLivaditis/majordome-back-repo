const Joi = require('joi');

module.exports = Joi.object({
    client: Joi.object({
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string()
            // .pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
            .pattern(/^0[1-9]\d{8}$/),
        comments: Joi.string().allow(null, ''),
        our_equipments: Joi.string().allow(null, ''),
        other_equipments: Joi.string().allow(null, ''),
        needs: Joi.string().allow(null, ''),
    }),
    addresses: Joi.array().items(Joi.object({
        id: Joi.number().integer().min(1).allow(null),
        number: Joi.alternatives().conditional('id', { is: null, then: Joi.string().required(), otherwise: Joi.string() }),
        street: Joi.alternatives().conditional('id', { is: null, then: Joi.string().required(), otherwise: Joi.string() }),
        postal_code: Joi.alternatives().conditional('id', { is: null, then: Joi.string().required(), otherwise: Joi.string() }),
        city: Joi.alternatives().conditional('id', { is: null, then: Joi.string().required(), otherwise: Joi.string() }),
        comments: Joi.string().allow(null, '').optional(),
    })),
}).min(1).required();
