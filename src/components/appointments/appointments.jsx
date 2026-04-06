import { useState, useEffect } from "react"
import "./appointments.css"
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

const Appointments = () => {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        getAppointments()
    }, [])

    async function getAppointments(){
        const response = await api.get('/appointments')
        setAppointments(response.data)
    }

    return (
        console.log(appointments)
    )
}