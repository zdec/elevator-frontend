// src/components/ElevatorShaft.jsx

import React, { useEffect, useState } from 'react';
import { getStatus } from '../services/elevatorService';
import './ElevatorShaft.css';

const ElevatorShaft = () => {
    const [status, setStatus] = useState({
        currentFloor: 0,
        running: false,
        doorOpen: false,
        pendingRequests: []
    });

    useEffect(() => {
        // Consulta periódica del estado del ascensor
        const fetchStatus = async () => {
            try {
                const data = await getStatus();
                setStatus(data);
            } catch (error) {
                console.error('Error al obtener estado del ascensor:', error);
            }
        };

        fetchStatus(); // Llamada inicial

        const interval = setInterval(fetchStatus, 1000); // Cada 0.5 segundos

        return () => clearInterval(interval); // Cleanup del intervalo
    }, []);

    return (
        <div className="elevator-shaft">
            {status && (
                <ul>
                    <li><strong>Piso actual:</strong> {status.currentFloor}</li>
                    <li><strong>En movimiento:</strong> {status.running ? 'Sí' : 'No'}</li>
                    <li><strong>Puerta abierta:</strong> {status.doorOpen ? 'Sí' : 'No'}</li>
                    <li>
                        <strong>Cola de pisos:</strong>{' '}
                        {Array.isArray(status.pendingRequests) && status.pendingRequests.length > 0
                            ? status.pendingRequests.join(', ')
                            : 'Vacía'}
                    </li>
                </ul>
            )}


            {/* Podrías animar esta parte visualmente más adelante */}
            <div className={`elevator-box ${status.running ? 'moving' : ''}`}>
                <p>{status.doorOpen ? 'Abierta' : 'Cerrada'}</p>
                <p>Piso {status.currentFloor}</p>
            </div>
        </div>
    );
};

export default ElevatorShaft;