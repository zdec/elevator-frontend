/**
 * @file elevatorService.js
 * @description Servicio frontend para comunicarse con la API RESTful del ascensor.
 * Proporciona funciones para llamar al ascensor, controlar las puertas, iniciar/detener
 * el ascensor y obtener su estado actual.
 * @author Daniel Ciro
 * @date 2025-04-08
 */

const API_URL = 'http://localhost:3000/elevator';

/**
 * Llama al ascensor a un piso específico.
 * @param {number} floor - Piso al que se solicita el ascensor.
 * @returns {Promise<object>} Respuesta del servidor.
 */
export const callElevator = async (floor) => {
    const res = await fetch(`${API_URL}/call`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ floor }),
    });
    return res.json();
};

/**
 * Envía una solicitud para abrir la puerta del ascensor.
 * @returns {Promise<object>} Respuesta del servidor.
 */
export const openDoor = async () => {
    const res = await fetch(`${API_URL}/open`, { method: 'POST' });
    return res.json();
};

/**
 * Envía una solicitud para cerrar la puerta del ascensor.
 * @returns {Promise<object>} Respuesta del servidor.
 */
export const closeDoor = async () => {
    const res = await fetch(`${API_URL}/close`, { method: 'POST' });
    return res.json();
};

/**
 * Inicia el movimiento del ascensor.
 * @returns {Promise<object>} Respuesta del servidor.
 */
export const startElevator = async () => {
    const res = await fetch(`${API_URL}/start`, { method: 'POST' });
    return res.json();
};

/**
 * Detiene el ascensor si está en movimiento.
 * @returns {Promise<object>} Respuesta del servidor.
 */
export const stopElevator = async () => {
    const res = await fetch(`${API_URL}/stop`, { method: 'POST' });
    return res.json();
};

/**
 * Obtiene el estado actual del ascensor desde el backend.
 * @returns {Promise<object>} Objeto con información del ascensor:
 *  - currentFloor: número,
 *  - running: booleano,
 *  - doorOpen: booleano,
 *  - pendingRequests: número[]
 */
export const getStatus = async () => {
    const res = await fetch(`${API_URL}/status`, { method: 'GET' });
    return res.json();
};