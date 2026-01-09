import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// IMPORTANTE: Traemos el proveedor de idioma
import { LanguageProvider } from './context/LanguageContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvemos TODA la app con el proveedor */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)