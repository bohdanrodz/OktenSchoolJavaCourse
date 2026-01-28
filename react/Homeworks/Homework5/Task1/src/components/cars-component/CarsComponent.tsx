import {useEffect, useState} from "react";
import {getAllCars} from "../../services/api.service.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";
import type { ICar } from "../../models/ICar.ts";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(response => setCars(response))
    }, []);

    return (
        <div className={'cars'}>
            {cars.map(car => <CarComponent car={car} key={car.id}/>)}
        </div>
    );
};