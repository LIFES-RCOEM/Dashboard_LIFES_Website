import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import AuthState from './context/Auth.tsx'
import AmbulanceState from './context/Ambulances.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthState>
      <AmbulanceState>
        <App />
      </AmbulanceState>
    </AuthState>
  </React.StrictMode>,
)
