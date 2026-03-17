import Text from "../components/Text"

function Favorites() {

    return (
        <>
            <Text as="h2" text={"Mis favoritos"} />
            <div>
                <Text as="h3" text={"Producto favorito 1"} />
                <Text as="h3" text={"Producto favorito 2"} />
                <Text as="h3" text={"Producto favorito 3"} />
            </div>
        </>
    )
}

export default Favorites