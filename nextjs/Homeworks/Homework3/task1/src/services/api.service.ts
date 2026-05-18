import {ICar} from "@/models/ICar";

export const getCars = async (): Promise<ICar[]> => await fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(r => r.json());
export const postCar = async (carInfo: ICar) => {
    await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carInfo)
    })
}