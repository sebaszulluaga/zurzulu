import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. IMPORTAMOS EL NAVBAR (¡Esta línea faltaba!)
import Navbar from './components/Navbar';

// 2. IMPORTAMOS TUS PÁGINAS REALES
import Home from './pages/Home';
import Research from './pages/Research';
import Ventures from './pages/Ventures';
import Arsenal from './pages/Arsenal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark text-white font-sans selection:bg-cyber-green selection:text-black">
        
        {/* Aquí ponemos el Navbar fijo para todas las páginas */}
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/arsenal" element={<Arsenal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;