import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/WelcomePage' element={<WelcomePage />}></Route>
    </Routes>
      

    </>
  )
}

export default App
