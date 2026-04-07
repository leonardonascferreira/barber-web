import { FaUser, FaLock, FaIdCard } from "react-icons/fa"
import { useState } from "react"
import "./register.css"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            await api.post('/barbers', { name, username, password })
            navigate('/')
        } catch (error) {
            console.error('Erro no login', error)
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Cadastre sua conta</h1>
                <div className='input-field'>
                    <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                    <FaIdCard className='icon' />
                </div>
                <div className='input-field'>
                    <input type="text" placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>

                <button>Criar Conta</button>
            </form>
        </div>
    )
}

export default Register
