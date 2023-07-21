import { useState } from 'react';
import styles from '../css/ProductCard.module.css'

const ProductCard = ({image, previewImage, name, price, onClick}) => {
    const [displayImage, setDisplayImage] = useState(image);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setDisplayImage(previewImage);
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setDisplayImage(image);
        setIsHovered(false);
    }

    return (
        <div className={styles.container} 
            onClick={onClick} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
        >
            <div style={{backgroundImage: `url(${displayImage})`}} className={isHovered ? styles.hoveredImage : styles.pImage}></div>
            <div className={styles.pName}>{name}</div>
            <div className={styles.pPrice}>{"$" + price.toFixed(2)}</div>
        </div>
    )
}

export default ProductCard;
