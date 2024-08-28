import React, {useEffect} from 'react'

const Navbar = ({color}) => {

// Case 1: Run on every render
useEffect(() => {
  alert("Hey i will run in every render");
});

// Case 2: Run only on first render
  useEffect(() => {
    alert("hey Welcome to my page. THis is the first render");
  }, []);


// Case 3: Run only when certain values Change
useEffect(() => {
  alert("Hey i am running because color was changed");
}, [color,]);


// Example of Cleanup function
useEffect(() => {
  alert("Hey welcome to my page. this is the first render of app.jsx")

  return () => {
    alert("Component was unmounted")
  }
},[])


  return (
    <div>
      i Am Navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
