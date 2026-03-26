import { useState } from "react"
import FavoriteContext from "./FavoriteContext"

function FavoriteProvider({ children }) {

    const [favoritesProducts, setFavoritesProducts] = useState([])

    const handleFavorite = (product) => {
        const isFavorite = favoritesProducts.find( fav => fav.id === product.id )
        if (!isFavorite) {
            setFavoritesProducts([...favoritesProducts, product])
        } else {
            setFavoritesProducts(
                favoritesProducts.filter( fav => fav.id !== product.id )
            )
        }
    }

    return (
        <FavoriteContext.Provider
            value={{
                favoriteList: favoritesProducts,
                handleFavorite
            }}
        >{children}</FavoriteContext.Provider>
    )
}

export default FavoriteProvider