import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Nilesh")
const [form, setform] = useState({})
const handleClick = () => {
  alert("Hey I am click")
}

// const handlemousehavor = () => {
//   alert("Hey i Am Mouseover")
// }
 
const handleChange = (e) => {
  // setname(e.target.value)
  setform({...form, [e.target.name]:e.target.value})
  console.log(form)
}

  return (

    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handlemousehavor}>
      I am Red div
      </div> */}

      <input type='text' name='email' value={form.email?form.email:""} onChange={handleChange}/>

      <input type='text' name='phone' value={form.phone?form:""} onChange={handleChange}/>

    </>
  )
}

export default App
