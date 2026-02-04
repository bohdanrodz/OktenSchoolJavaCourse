import {createRoot} from 'react-dom/client'     // necessary imports
import './index.css'
import {RouterProvider} from "react-router";
import {routes} from "./routes/routes.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>); // setting routes