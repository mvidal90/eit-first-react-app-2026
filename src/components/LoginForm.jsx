import Button from './Button'
import InputText from './Inputtext'
import './LoginForm.css'

function LoginForm() {
    return (
        <form className='form-container'>
            <InputText label="Usuario" id="user" type="text" />
            <InputText label="Contraseña" id="password" type="password" />
            <Button
                label="Iniciar Sesión"
                type="submit" />
        </form>
    )
}

export default LoginForm