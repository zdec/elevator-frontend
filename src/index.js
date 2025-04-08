/**
 * @file index.js
 * @description Punto de entrada de la aplicación React. Renderiza el componente raíz <App /> dentro del DOM.
 * También carga los estilos globales desde global.css, idealmente importados aquí para mantener la consistencia global.
 * @author Daniel Ciro
 * @date 2025-04-08
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Estilos globales importados a nivel raíz
import App from './App';

// Punto de entrada al DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);