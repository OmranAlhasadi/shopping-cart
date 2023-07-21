
import styles from '../css/ProductCard.module.css'

const ProductCard = ({image, name, price, onClick}) => {
    return(
        <div className={styles.container} onClick={onClick}>
            <div style={{backgroundImage: `url(${image})`}}
            className={styles.pImage}></div>
            <div className={styles.pName}>{name}</div>
            <div className={styles.pPrice}>{"$" + price}</div>

        </div>
    )
}

export default ProductCard;