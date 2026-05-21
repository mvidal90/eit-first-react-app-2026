import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

import AuthProvider from './context/auth/AuthProvider.jsx'
import FavoriteProvider from './context/favorite/FavoriteProvider.jsx'

import './styles/main.scss'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <FavoriteProvider>
            <AppRoutes />
        </FavoriteProvider>
    </AuthProvider>,
)
