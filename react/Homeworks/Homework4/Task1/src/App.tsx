import {Link, Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Link to={'users'}>users</Link>
      <hr/>
      <Outlet/>
    </>
  )
}

export default App
