import {z} from "zod";

export const carSchema = z.object({
    brand: z.string()
        .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/, 'Brand must contain only letters and have 1-20 characters'),
    price: z.number()
        .min(0, 'Price must be a number higher than 0')
        .max(1000000, 'Price must be a number lower than 1000000'),
    year: z.number()
        .min(1990, 'Year must be higher than 1989')
        .max(2026, 'Year must be lower than 2027')
})

export type CarFormData = z.infer<typeof carSchema>;