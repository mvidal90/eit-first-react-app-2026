import Text from './Text'
import ProductCard from './ProductCard'
import { useContext } from 'react'
import FavoriteContext from '../context/favorite/FavoriteContext'

function FavoriteList() {

    const { handleFavorite, favoriteList } = useContext(FavoriteContext)

    return (
        <div className="favorite__list-container">
            <Text as="h3" text="Mis favoritos" />
            {
                favoriteList.map(product => 
                    <ProductCard
                        key={product.id} 
                        {...product}
                        isFavorite
                        handleFavorite={() => handleFavorite(product)}  />
                )
            }
        </div>
    )
}

export default FavoriteList