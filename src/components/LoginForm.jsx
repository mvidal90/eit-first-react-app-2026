import { useState } from 'react'
import Button from './Button'
import InputText from './Inputtext'
import './LoginForm.css'

function LoginForm() {

    const [values, setValues] = useState({
        user: "",
        password: "",
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <InputText 
                label="Usuario"
                id="user"
                type="text"
                value={values.user}
                handleChange={handleInputChange} />
            <InputText
                label="Contraseña" 
                id="password" 
                type="password"
                value={values.password}
                handleChange={handleInputChange} />
            <Button
                label="Iniciar Sesión"
                type="submit" />
        </form>
    )
}

export default LoginForm