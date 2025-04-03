import Button from './Button'
import { useState } from 'react'


function add(a,b){
    return a+b
}

function Hello(props){
    const {name, msg, age, courses, grades} = props
    const {c1, c2, c3} = grades

    const [day, setDay] = useState(1)
      function increaseDay(){
        setDay(day+1);
      }
    // person = {
    //     "pname" : "John",
    //     "sch" : "Houghton"
    // }
    // const {pname, sch} = person

    const [fname, lname] = useState("")
    return <div> 
        <h1>Hello {name}</h1> <p>{msg} {name}, you are {age}</p> 
        <h1 onClick={increaseDay} >{day}</h1>
        <h2>{courses}<br></br> 
        {c1}<br></br> 
        {c2}<br></br>
        {c3}</h2>
        {add(20, 1)} 
    </div>
}

export default Hello