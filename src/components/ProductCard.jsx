import Text from './Text'
import Button from './Button'

function ProductCard({
    name,
    description,
    price,
    isFavorite,
    handleFavorite
}) {
    return (
        <div className='product__card-container'>
            <Text as="h4" text={name} />
            <Text as="p" text={description} />
            <Text as="p" className="product__card-price" text={`$ ${price}`} />
            <Button 
                label={isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
                handleClick={handleFavorite}
                type="button"
                variant={isFavorite ? 'outline' : 'solid'}
                color='primary'
            />
        </div>
    )
}

export default ProductCard