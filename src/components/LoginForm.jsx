import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

import Button from './Button'
import InputText from './Inputtext'

import { validateLogin } from '../utils/validations/validateLogin.js';

import { postLogin } from '../api/auth.js'

function LoginForm() {

    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        if (values.email || values.password) {
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
        if (!errors.email && !errors.password) {
            postLogin(values)
                .then((response) => {
                    console.log(response)
                    navigate("/home")
                })
                .catch((error) => {
                    const errorsField = error.response.data.errors
                    setErrors(errorsField)
                })
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <InputText 
                label="Usuario"
                id="email"
                type="text"
                value={values.email}
                handleChange={handleInputChange}
                error={errors["email"]} />
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