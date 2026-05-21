import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { postLogin, revalidateSession } from "../../api/auth";
import { setToken, removeToken } from "../../api/index";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const handleLogout = () => {
        setUser(null)
        removeToken()
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            revalidateSession(token)
                .then((resp) => {
                    setUser(resp.user)
                    setToken(resp.jwt)
                })
                .catch((e) => {
                    handleLogout()
                })
        }
    }, [])

    const handleLogin = async(credencials) => {
        try {
            const resp = await postLogin(credencials)
            setUser(resp.user)
            setToken(resp.jwt)
        } catch (error) {
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            handleLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider