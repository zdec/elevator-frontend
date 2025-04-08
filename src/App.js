/**
 * @file App.js
 * @description Componente raíz de la aplicación React que integra el simulador de ascensor.
 * Renderiza el título principal y el componente <ControlPanel />.
 * Aplica estilos globales desde global.css.
 * @author Daniel Ciro
 * @date 2025-04-08
 */

import React from 'react';
import ControlPanel from './components/ControlPanel';
import './styles/global.css';

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} Estructura principal del simulador de ascensor.
 */
function App() {
  return (
    <div className="app-container">
      <h1>🛗 Simulador de Ascensor</h1>
      <div className="main-layout">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;