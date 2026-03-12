

const userRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const USER_MESSAGE = "El usuario no tiene formato email."
const PASS_MESSAGE = "La password no cumple con el formato."

const validationsRegex = {
    user: userRegex,
    password: passwordRegex
}

const helperErrors = {
    user: USER_MESSAGE,
    password: PASS_MESSAGE
}

// Object.keys(objeto) -> nos devuelve un array con todas las keys del objeto
// Object.values(objeto) -> nos devuelve un array con todos los valores de cada key del objeto

// Object.entries -> me transforma un objeto de la forma
// {key: value} a un
// array de arrays: [[key, value]]

export const validateLogin = values => {
    const valuesArray = Object.entries(values) // [[user, value], [password, value]]
    const errors = {
        user: "",
        password: ""
    }
    valuesArray.forEach(
        ([key, value]) => {
            const expReg = new RegExp(validationsRegex[key])
            if (!expReg.test(value)) {
                errors[key] = helperErrors[key]
            }
        }
    )
    return errors
}