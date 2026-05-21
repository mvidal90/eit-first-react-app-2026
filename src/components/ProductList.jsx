import { useContext } from 'react'
import Text from './Text'
import ProductCard from './ProductCard'
import FavoriteContext from '../context/favorite/FavoriteContext'

import productList from '../data/products.json'

function ProductList() {

    const { handleFavorite, favoriteList } = useContext(FavoriteContext)

    return (
        <div className="favorite__list-container">
            <Text as="h3" text="Productos para seleccionar" />
            {
                productList.map(product => 
                    <ProductCard
                        key={product.id} 
                        {...product}
                        isFavorite={favoriteList.some( fav => fav.id === product.id)}
                        handleFavorite={() => handleFavorite(product)}  />
                )
            }
        </div>
    )
}

export default ProductList