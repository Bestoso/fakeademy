import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago('APP_USR-f4ee0560-b1b6-433b-80f8-397a12d4d84b');

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)