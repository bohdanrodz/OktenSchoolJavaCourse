import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({
            'string.pattern.base': 'wrong brand name',
            'string.empty': 'brand name is required',
        }),
    price: Joi.number().min(0).max(1000000)
        .messages({
            'number.min' : 'price must be greater than 0',
            'number.max' : 'price must be less than 1000000',
            'number.base' : 'price is required and should be a number'
        }),
    year: Joi.number().min(1990).max(2025)
        .messages({
            'number.min' : 'min year is 1990',
            'number.max' : 'max year is 2025',
            'number.base' : 'year is required and should be a number'
        })
})