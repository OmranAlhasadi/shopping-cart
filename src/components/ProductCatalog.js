import styles from '../css/ProductCatalog.module.css'
import ProductCard from './ProductCard'

const ProductCatalog = ({list, onProductClick}) => {
    return(
        <div className={styles.catalogContainer}>
            {list.map((product, index) => (
                <ProductCard 
                    key={product.id}
                    image={product.image}
                    previewImage={product.previewImage}
                    name={product.name}
                    price={product.price}
                    onClick={() => onProductClick(product)}
                />
            ))}
        </div>
    )
}

export default ProductCatalog;
