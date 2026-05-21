import { useContext } from 'react'
import { Navigate } from 'react-router'

import AuthContext from '../context/auth/AuthContext.jsx'

import PrivateLayout from '../layouts/PrivateLayout.jsx'


function PrivateRoutes() {

    const {user} = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <PrivateLayout />
    )
}

export default PrivateRoutes