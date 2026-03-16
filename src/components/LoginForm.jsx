import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

import Button from './Button'
import InputText from './Inputtext'

import { validateLogin } from '../utils/validations/validateLogin.js';

import './LoginForm.css'

function LoginForm() {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        user: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        user: "",
        password: "",
    })

    useEffect(() => {
        if (values.user || values.password) {
            const errorsValidated = validateLogin(values)
            setErrors(errorsValidated)
        }
        return () => {
            // clean up -> al desmontarse el componente
        }
    }, [values])

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errors.user && !errors.password) {
            console.log(values)
            navigate("/home")
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <InputText 
                label="Usuario"
                id="user"
                type="text"
                value={values.user}
                handleChange={handleInputChange}
                error={errors["user"]} />
            <InputText
                label="Contraseña" 
                id="password" 
                type="password"
                value={values.password}
                handleChange={handleInputChange}
                error={errors["password"]}  />
            <Button
                label="Iniciar Sesión"
                type="submit" />
        </form>
    )
}

export default LoginForm