import Button from "./components/Button"
import InputText from "./components/Inputtext"
import LoginForm from "./components/LoginForm"
// import "./examples/index"

function App() { //PascalCase
  
    return (
        <>
            <Button
                label="Ir a la home"
                handleClick={() => alert("Home")} />
            <Button 
                label="Ver precios"
                color="success"
                handleClick={() => console.log("Ir a ver precios")} />
            <Button
                label="Ir a pagar"
                variant="outline"
                handleClick={() => console.log("Vamos a pagar")}/>
            <Button
                label="Mis compras"
                color="error"
                variant="outline"
                handleClick={() => alert("Mis compras")} />
            <LoginForm />
        </>
    )
}

export default App
