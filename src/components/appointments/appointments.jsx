import { useState, useEffect } from "react"
import "./appointments.css"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

const Appointments = () => {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [date, setDate] = useState("2026-04-10")

    useEffect(() => {
        getAppointments()
    }, [date])

    async function getAppointments() {
        try {
            const response = await api.get(`/appointments?date=${date}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setAppointments(response.data)
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error)
        }
    }

    async function updateStatus(id, status) {
        try {
            await api.put(
                `/appointments/${id}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
            getAppointments()
        } catch (error) {
            console.error("Erro ao atualizar status:", error)
        }
    }

    return (
        <div className="appointments-container">
            <h1>Agendamentos</h1>

            <input
                type="date"
                className="date-picker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            {appointments.length === 0 && (
                <p className="no-appointments">Nenhum agendamento para este dia.</p>
            )}

            {appointments.map((appointment) => (
                <div key={appointment.id} className="appointment-card">
                    <div className="card-info">
                        <p>
                            <span>Cliente:</span> {appointment.client.name}
                        </p>
                        <p>
                            <span>Barbeiro:</span> {appointment.barber.name}
                        </p>
                        <p>
                            <span>Horário:</span>{" "}
                            {new Date(appointment.scheduledAt).toLocaleString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "America/Sao_Paulo"
                            })}
                        </p>
                        <p>
                            <span>Serviço:</span> {appointment.service.name}
                        </p>
                    </div>

                    <div className="card-footer">
                        <span className={`status-badge status-${appointment.status}`}>
                            {appointment.status}
                        </span>

                        <div className="card-actions">
                            <button
                                className="btn-confirm"
                                onClick={() => updateStatus(appointment.id, "confirmed")}
                            >
                                Confirmar
                            </button>

                            <button
                                className="btn-cancel"
                                onClick={() => updateStatus(appointment.id, "cancelled")}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Appointments