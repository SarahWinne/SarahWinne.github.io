import { useState } from 'react'

function SignUpForm(){
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Moose")

    function submit(e){

    }

    return <>
    <h1>Create New Account</h1>
    <input type="text" placeholder="First name" onChange={(e) => setFName(e.target.value)} value={fname}/> <br/>
    <input type="text" placeholder="Last name" onChange={(e) => setLName(e.target.value)} value={lname}/> <br/>
    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/> <br/>
    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/> <br/>
    <select type="select" onChange={(e) => setGender(e.target.value)} value={gender}>
        <option value={"Moose"}>Moose</option>
        <option value={"Canadian"}>Canadian</option>
        <option value={"Truck"}>Truck</option>
    </select> <br/>

    <button onClick={(e)=> submit(e)}>Submit</button>

    <p>Hello {fname} {lname}, your password is {password}, your email is {email} and your are {gender}</p>
    </>
}

export default SignUpForm