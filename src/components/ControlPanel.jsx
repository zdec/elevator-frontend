/**
 * @file ControlPanel.jsx
 * @description Componente principal para controlar y visualizar el estado del ascensor.
 * Proporciona botones de acción para llamar al ascensor, abrir/cerrar puertas, iniciar/detener el movimiento
 * y muestra gráficamente el estado actual del sistema mediante el componente <ElevatorShaft />.
 * @author Daniel Ciro
 * @date 2025-04-08
 */

import React, { useState, useEffect } from 'react';
import {
    callElevator,
    openDoor,
    closeDoor,
    startElevator,
    stopElevator,
    getStatus,
} from '../services/elevatorService';
import ElevatorShaft from './ElevatorShaft';
import './ControlPanel.css';

const ControlPanel = () => {
    // Estado del ascensor: piso actual, movimiento, puerta y solicitudes pendientes
    const [status, setStatus] = useState({
        currentFloor: 0,
        running: false,
        doorOpen: false,
        pendingRequests: []
    });

    /**
     * Obtiene el estado actual del ascensor desde la API.
     */
    const fetchStatus = async () => {
        const newStatus = await getStatus();
        setStatus(newStatus);
    };

    // Consulta el estado del ascensor al montar el componente y lo actualiza cada segundo
    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 1000);
        return () => clearInterval(interval);
    }, []);

    /**
     * Llama al ascensor a un piso específico.
     * @param {number} floor - Piso al que se desea llamar el ascensor.
     */
    const handleCall = async (floor) => {
        await callElevator(floor);
        fetchStatus();
    };

    const handleStart = async () => {
        await startElevator();
        fetchStatus();
    };

    const handleStop = async () => {
        await stopElevator();
        fetchStatus();
    };

    const handleOpen = async () => {
        await openDoor();
        fetchStatus();
    };

    const handleClose = async () => {
        await closeDoor();
        fetchStatus();
    };

    return (
        <div className="control-panel">
            <h2>Panel de Control del Ascensor</h2>

            <div className="control-columns">
                {/* Botones para llamar al ascensor a un piso específico */}
                <section className="floor-buttons-section">
                    <h3>Botones del Ascensor</h3>
                    <div className="floor-buttons">
                        {[...Array(10)].map((_, i) => {
                            const floor = i + 1;
                            return (
                                <button key={floor} onClick={() => handleCall(floor)}>
                                    Llamar al Piso {floor}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Acciones disponibles sobre el ascensor */}
                <section className="action-buttons-section">
                    <h3>Acciones</h3>
                    <div className="action-buttons">
                        <button onClick={handleOpen}>Abrir Puerta</button>
                        <button onClick={handleClose}>Cerrar Puerta</button>
                        <button onClick={handleStart}>Iniciar</button>
                        <button onClick={handleStop}>Detener</button>
                    </div>
                </section>

                {/* Vista del estado actual del ascensor */}
                <section className="elevator-shaft-section">
                    <h3>Estado del Ascensor</h3>
                    <ElevatorShaft status={status} />
                </section>
            </div>
        </div>
    );
};

export default ControlPanel;