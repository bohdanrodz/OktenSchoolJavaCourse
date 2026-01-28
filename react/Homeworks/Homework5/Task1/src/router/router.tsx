import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {CarsComponent} from "../components/cars-component/CarsComponent.tsx";
import {PostCarComponent} from "../components/post-car-component/PostCarComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'cars', element: <CarsComponent/>},
            {path: 'cars/add', element: <PostCarComponent/>}]
    }
]);