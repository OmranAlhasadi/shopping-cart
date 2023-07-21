import React, { useEffect, useRef } from 'react';
import styles from '../css/CartSlider.module.css';
import CartItem from './CartItem';


const CartSlider = ({ cartItems, onClose, increment, decrement }) => {
  const sliderRef = useRef();

  const handleClickOutside = (event) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div ref={sliderRef} className={styles.cartSlider}>
      <h2>Shopping Cart</h2>
      <div className={styles.itemsContainer}>
        {cartItems.map((item, index) => (
          <CartItem item={item} increment={increment} decrement={decrement}/>
        ))}
      </div>
      <div className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</div>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
  
};

export default CartSlider;
