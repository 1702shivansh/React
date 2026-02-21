import { useState } from "react"
import Button from "./components/button";

function App() {
  const [color,setColor]=useState("olive");  
  function handleChange(event){
    const name=event.target.name;
    setColor(name);
  }
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <Button name="red" f={handleChange}/>
            <Button name="green" f={handleChange} />
            <Button name="blue"f={handleChange} />
            <Button name="black" f={handleChange}/>
            <Button name="pink"f={handleChange} />
        </div>
      </div>
    </>
  )
}

export default App
