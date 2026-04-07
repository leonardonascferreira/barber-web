import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"
import { useState } from "react"
import "./client.css"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

const Clients = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        await api.post('/clients', { name, phone, email })
        localStorage.setItem('clientId', response.data.id)
        navigate('/services')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Bem vindo!</h1>
                <div className="input-field">
                    <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div  className="input-field">
                    <input type="tel" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
                    <FaPhone className="icon" />
                </div>
                <div className="input-field">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <FaEnvelope className="icon" />
                </div>

                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Clients