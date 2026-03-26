
import FavoriteList from "../components/FavoriteList"
import ProductList from "../components/ProductList"
import Text from "../components/Text"

function Favorites() {
    return (
        <div className="favorites__page">
            <Text as="h2" text={"Mis favoritos"} />
            <div className="favorites__layout">
                <ProductList />
                <FavoriteList />
            </div>
        </div>
    )
}

export default Favorites