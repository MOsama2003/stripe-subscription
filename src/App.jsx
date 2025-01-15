import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './layout/Home'
import Login from './layout/Login'
import Register from './layout/Register'
import Success from './layout/Success'
import Cancel from './layout/cancel'

function App() {
 
  return (
    <>
       <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/success' element={<Success/>}/>
       <Route path='/cancel' element={<Cancel/>}/>
      </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
