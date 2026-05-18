import {getCars} from "@/services/api.service";

const Cars = async () => {
    const cars = await getCars();
    return (
        <div className={'cars'}>
            {cars.map(car => <div key={car.id} className={'car'}>{car.brand}({car.year}) - ${car.price}</div>)}
        </div>
    );
}

export default Cars;