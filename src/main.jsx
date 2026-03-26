import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

import './styles/main.scss'
import FavoriteProvider from './context/FavoriteProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FavoriteProvider>
            <AppRoutes />
        </FavoriteProvider>
    </StrictMode>,
)
