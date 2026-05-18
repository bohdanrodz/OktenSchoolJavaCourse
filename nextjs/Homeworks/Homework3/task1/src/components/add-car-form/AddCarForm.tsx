import Form from "next/form";
import './AddCarForm.css'
import {addCar} from "@/server-actions/serverActions";

export const AddCarForm = () => {
    return (
        <Form action={addCar} className={'add-car-form'}>
            <input type="text" placeholder={'Brand'} name="brand"/>
            <input type="number" placeholder={'Price'} name="price"/>
            <input type="number" placeholder={'Year'} name="year"/>
            <button type="submit">Add Car</button>
        </Form>
    );
};