import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./services.css"
import api from "../../services/api"

const Services = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])

    useEffect(() => {
        async function loadServices() {
            const response = await api.get('/services')
            setServices(response.data)
        }
        loadServices()
    }, [])

    function handleSelect(serviceId) {
        navigate(`/appointments?serviceId=${serviceId}`)
    }

    function handleSelect(serviceId) {
    navigate(`/appointments/new?serviceId=${serviceId}`)
}

    return (
        <div className="container">
            <h1>Serviços</h1>
            {services.map(service => (
                <div key={service.id} className="service-card">
                    <div className="service-info">
                        <h2>{service.name}</h2>
                        <div className="service-meta">
                            <span>R$ {service.price}</span>
                            <span>{service.duration} min</span>
                        </div>
                    </div>
                    <button onClick={() => handleSelect(service.id)}>
                        Agendar
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Services