import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import { MemoPage } from './pages/MemoPage.tsx';

createRoot(document.getElementById('root')!).render(<RouterProvider router={createBrowserRouter([
    {path: '', element: <App/>},
    {path: 'memo', element: <MemoPage/>}
])}/>)
