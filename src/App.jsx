import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login'
import Register from './components/register/register'
import Appointments from './components/appointments/appointments'
import Clients from './components/clients/client'
import Services from './components/services/services'
import NewAppointment from './components/appointments/newappointments'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/appointments/new" element={<NewAppointment />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    </div>
  )
}

export default App