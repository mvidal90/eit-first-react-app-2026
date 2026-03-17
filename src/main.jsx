import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

import './styles/main.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRoutes />
    </StrictMode>,
)
