import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'

import AuthContext from '../context/auth/AuthContext.jsx'

function PublicRoute() {

    const { user } = useContext(AuthContext)

    if (user) {
        return <Navigate to="/home" />
    }

    return (
        <Outlet />
    )
}

export default PublicRoute