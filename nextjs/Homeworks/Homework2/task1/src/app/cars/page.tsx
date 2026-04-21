import {getCars} from "@/services/api.service";
import './Cars.css'

const carsPage = async () => {
    const cars = await getCars();
    return(
        <div className={'cars-container'}>
            {cars.map(car => <div key={car.id}>{car.brand}({car.year}) - ${car.price}</div>)}
        </div>
    )
}

export default carsPage;

