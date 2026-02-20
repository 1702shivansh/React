import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
//updated
// function MyApp(){
//   return <div>
//     <h1>hi from Shivansh</h1>
//   </div>
// }
// const reactElement={
//     type:"a",
//     props:{
//         href:"https://google.com",
//         target:"_blank",
//     },
//     children:"click me to visit google",
// };
//a plane object
// const anotherReactElement=(
//   <a href='https://google.com' target='_blank' >Visit Google</a>
// )
//now the way in which react create sthe element is as
const reactElement=React.createElement(
  'a',{href:"https://google.com",target:"_blank"},
  'click me to visit google',
)
createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // reactElement // it wont work because the way in which react interprets the synatx can be different 
    // anotherReactElement//it works definitely 
     reactElement // the way in which React understand the syntax and then converts
)
