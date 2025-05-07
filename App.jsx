import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import LoginPage from '../Component/login'
//
  import Register from '../Component/Register'
 //import Profile from '../Component/Profile'
 import { Routes, Route } from "react-router";
 import Home from '../Component/Regpage'

function App() {
  const [count, setCount] = useState(0)
 {
    return (
      
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            {/* <Route path="/home" element={<Home />} />
            <Route path="/my-quotes" element={<MyQuotes />} />
            <Route path="/my-quotes/add" element={<AddQuote />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
      
    );
  }
}  
  

export default App
