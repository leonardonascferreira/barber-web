import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login'
import Register from './components/register/register'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
