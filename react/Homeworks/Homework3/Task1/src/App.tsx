import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
  return (
    <>
      <Menu/>
      <h2>dsad</h2>
      <Outlet></Outlet>
    </>
  )
}

export default App
