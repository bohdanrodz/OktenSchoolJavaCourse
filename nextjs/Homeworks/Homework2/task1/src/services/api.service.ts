import {ICar} from "@/models/ICar";

export const getCars = async (): Promise<ICar[]> => await fetch("http://owu.linkpc.net/carsAPI/v1/cars").then(res => res.json());