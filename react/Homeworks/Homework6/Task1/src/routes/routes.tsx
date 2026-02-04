import {createBrowserRouter} from "react-router";       // necessary imports
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([     // creating routes
    {
        path: '/', element: <MainLayout/>, children: [      // base url path directing to Main Layout
            {index: true, element: <HomePage/>},        // automatically redirect to Home Page with base url
            {path: 'login', element: <LoginPage/>},     // redirect to Login Page on /login path
            {path: 'auth/resources', element: <AuthResourcesPage/>},   // redirect to AuthResourcesPage on /auth/resources path
        ]
    }
]);