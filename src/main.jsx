import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

import FavoriteProvider from './context/FavoriteProvider.jsx'

import './styles/main.scss'

createRoot(document.getElementById('root')).render(
    <FavoriteProvider>
        <AppRoutes />
    </FavoriteProvider>,
)
