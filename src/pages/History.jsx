import Text from "../components/Text"

function History() {

    return (
        <>
            <Text as="h2" text={"Historial de compras"} />
            <div>
                <Text as="h3" text={"Compra 1 -> $1.000"} />
                <Text as="h3" text={"Compra 3 -> $4.000"} />
                <Text as="h3" text={"Compra 3 -> $7.000"} />
            </div>
        </>
    )
}

export default History