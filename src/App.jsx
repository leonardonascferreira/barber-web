import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login'
import Register from './components/register/register'
import Appointments from './components/appointments/appointments'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
    </div>
  )
}

export default App
