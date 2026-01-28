import './App.css'
import {Link, Outlet} from "react-router";

function App() {

  return (
    <>
      <div>
        <Link to={'cars'}>Cars</Link>
        <Link to={'cars/add'}>Add car</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default App
