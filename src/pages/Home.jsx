import { useContext } from "react"

import AuthContext from "../context/auth/AuthContext.jsx"

import Button from "../components/Button"
import Counter from "../components/Counter"
import Text from "../components/Text"

function Home() {
    const nowHours = new Date().getHours()
    const { user } = useContext(AuthContext)

    return (
        <>
            <Text as="h2" text={nowHours > 19 ? `Hola ${user.name} ${user.lastName}, muy buenas noches!` : `Hola ${user.name} ${user.lastName}, muy buenos días!!`} />
            <Counter />
            <div>
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
            </div>
        </>
    )
}

export default Home