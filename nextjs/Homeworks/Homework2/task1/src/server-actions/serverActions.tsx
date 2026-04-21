'use server';

import {revalidatePath} from "next/cache";
import {CarFormData, carSchema} from "../../lib/schema";

export const postCar = async (formData: CarFormData) => {
    const validatedData = carSchema.safeParse(formData);
    if (!validatedData.success) {
        return
    }
    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData.data),
    });
    console.log(response);
    revalidatePath('/cars')
}