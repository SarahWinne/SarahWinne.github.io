import { useState } from 'react'


function AddNumbers(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    function add(e){
        e.preventDefault();
        var n1= parseInt(num1)
        var n2= parseInt(num2)
        setResult(n1+n2);
    }
    return <>
    <div>
        <label>First Number</label>
        <input type="text" onChange={(e) => setNum1(e.target.value)} value={num1}/>
    </div>
    <div>
        <label>Second Number</label>
        <input type="text" onChange={(e) => setNum2(e.target.value)} value={num2}/>
    </div>
    <div>
        <button onClick={(e)=> add(e)}>Add </button>
    </div>
    <h1>Result is {result}</h1>
    </>
}

export default AddNumbers