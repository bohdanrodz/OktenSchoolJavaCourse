import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

interface CarProps {
    car: ICar;
}
export const CarComponent:FC<CarProps> = ({car:{brand, year}}) => {
    return (
        <p className={'car'}>
            {brand} ({year})
        </p>
    );
};