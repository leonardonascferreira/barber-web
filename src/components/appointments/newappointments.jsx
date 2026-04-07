import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import api from "../../services/api"

const NewAppointment = () => {
    const [searchParams] = useSearchParams()
    const serviceId = searchParams.get('serviceId')
    const navigate = useNavigate()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    async function handleSubmit() {
        const scheduledAt = new Date(`${date}T${time}:00.000Z`)

        await api.post('/appointments', {
            clientId: Number(localStorage.getItem('clientId')),
            barberId: 1,
            serviceId: Number(serviceId),
            scheduledAt
        })

        navigate('/confirm')
    }

    return (
        <div className="container">
            <h1>Agendar</h1>

            <div className="input-field">
                <label>Data</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="input-field">
                <label>Horário</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Confirmar agendamento</button>
        </div>
    )
}

export default NewAppointment