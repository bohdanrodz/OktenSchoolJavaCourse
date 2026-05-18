"use server"

import {postCar} from "@/services/api.service";

export const addCar = async (formData: FormData) => {
    const brand = formData.get("brand")?.toString().trim();
    const year = Number(formData.get("year"));
    const price = Number(formData.get("price"));
    if (!brand || Number.isNaN(year) || Number.isNaN(price) || year <= 0 || price <= 0) {
        throw new Error("Please enter a valid info");
    }
    await postCar({
        brand: brand,
        year: year,
        price: price
    })
}