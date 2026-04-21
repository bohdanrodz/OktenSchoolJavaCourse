'use client';

import './AddCarForm.css'
import {postCar} from "@/server-actions/serverActions";
import {CarFormData, carSchema} from "../../../lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

export const AddCarForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<CarFormData>({
        resolver: zodResolver(carSchema)
    })
    const onSubmit = async (data: CarFormData) => {
        await postCar(data);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'add-car-form'}>
            <h3>Form</h3>
            <input {...register("brand")} placeholder="Brand"/>
            {errors.brand && (<p>{errors.brand.message}</p>)}
            <input {...register("year", {valueAsNumber: true})} placeholder="Year" type={'number'}/>
            {errors.year && (<p>{errors.year.message}</p>)}
            <input {...register("price", {valueAsNumber: true})} placeholder="Price" type={'number'}/>
            {errors.price && (<p>{errors.price.message}</p>)}
            <button type={"submit"}>Add car</button>
        </form>
    );
};