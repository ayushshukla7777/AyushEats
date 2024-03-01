import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes'
import AuthenticationProvider from './auth/AuthenticationProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <AppRoutes/>
      </AuthenticationProvider>
    </Router>


  </React.StrictMode>,
)
