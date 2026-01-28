import './PostCarComponent.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";

export const PostCarComponent = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const submitHandler = (car: ICar) => {
        addCar(car);
    }

    return (
        <div className={'add-car-container'}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Brand</label>
                    <input type='text' {...register('brand')}/>
                    <p>{errors.brand?.message}</p>
                </div>
                <div>
                    <label>Price</label>
                    <input type='number' {...register('price')}/>
                    <p>{errors.price?.message}</p>
                </div>
                <div>
                    <label>Year</label>
                    <input type='number' {...register('year')}/>
                    <p>{errors.year?.message}</p>
                </div>
                <button type={'submit'}>Add car</button>
            </form>
        </div>
    );
};