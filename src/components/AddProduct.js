
import styles from '../css/AddProduct.module.css'
import { useState, useEffect } from 'react';

const AddProduct = ({ product, cartItems, increment, decrement, onClose }) => {
    const [quantity, setQuantity] = useState(0);

    const handleOutsideClick = (event) => {
        if(event.currentTarget === event.target){
            onClose();
        }
    }

    useEffect(() => {
        
        const cartItem = cartItems.find(item => item.id === product.id);
        setQuantity(cartItem ? cartItem.quantity : 0);
    }, [product, cartItems]);

    return (
        <div className={styles.backdrop} onClick={handleOutsideClick}>
            <div className={styles.modal}>
                <div className={styles.productInfo}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <div className={styles.productDetails}>
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                </div>
                <div className={styles.quantityControls}>
                    <button className={styles.qbutton} onClick={() => decrement(product.id)}>-</button>
                    <div>{quantity}</div>
                    <button className={styles.qbutton} onClick={() => increment(product.id)}>+</button>
                </div>
                <button className={styles.confirm}>Confirm</button>
            </div>
        </div>
    )
}

export default AddProduct;
