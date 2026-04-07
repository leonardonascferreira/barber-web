import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from "react"
import "./login.css"
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const response = await api.post('/login', { username, password })
            localStorage.setItem('token', response.data.token)
            navigate('/appointments?date=')
        } catch (error) {
            setError('Usuário ou senha incorretos')
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="text" placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#"> Esqueceu a senha?</a>
                </div>
                {error && <p className="error-msg">{error}</p>}
                <button>Entrar</button>

                <div className='signup-link'>
                    <p>
                        Não tem uma conta? <Link to="/register">Registrar</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
