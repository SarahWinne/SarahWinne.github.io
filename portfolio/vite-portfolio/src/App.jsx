import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Old/Hello'
import SignUpForm from './components/Old/SignUpForm'
import AddNumbers from './components/Old/AddNumbers'

function App() {
  const [count, setCount] = useState(0)
  const courses= ["Web Dev ", "Programming II ", "Music Theory "]
  const grades= {
    "c1":"A",
    "c2":"B",
    "c3":"A"
  }
  const [day, setDay] = useState(1)
  function increaseDay(){
    setDay(day+1);
  }

  return (
    <div className="App">
      {/* <SignUpForm /> */}
      {/* <AddNumbers /> */}
      <SignUpForm/>



      {/* <Hello name = "Sarah"  age="56" msg = "Hello, your name is " courses={courses} grades={grades}/> */}
{/* 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <SignUpForm />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
