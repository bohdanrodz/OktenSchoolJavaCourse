import './App.css'
import {A} from './components/A.tsx'
import {B} from "./components/B.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <MyContext.Provider value={{
        value: value,
        increment: (val: number) => setValue(++val),
      }}>
      <A/>
      <hr/>
      <B/>
        </MyContext.Provider>
    </>
  )
}

export default App
