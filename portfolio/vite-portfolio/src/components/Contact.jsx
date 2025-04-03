import { useState } from 'react'

function Contact(){
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    function submit(e){

    }

    return <>
    <div class="contactArea">
    <h1 align="left">Contact Form</h1>
    <div id='contactForm'>
    <label>Name: </label> 
    <input type="text" placeholder="Name" size={50} onChange={(e) => setName(e.target.value)} value={name}/> <br/>
    <label>Email: </label> 
    <input type="email" placeholder="email" size={50} onChange={(e) => setEmail(e.target.value)} value={email}/> <br/>
    <textarea placeholder="Message" rows={5} cols={50} onChange={(e) => setMessage(e.target.value)} value={message}></textarea> <br/>

    <button onClick={(e)=> submit(e)}>Submit</button>
    </div>
    </div>
    </>
}

export default Contact