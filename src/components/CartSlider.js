import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from '../css/CartSlider.module.css';
import CartItem from './CartItem';

const CartSlider = ({ cartItems, onClose, increment, decrement, isCartOpen }) => {
  const sliderRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (isCartOpen && sliderRef.current && !sliderRef.current.contains(event.target)) {
      onClose();
    }
  }, [isCartOpen, onClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const sidebar = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 22
      }
    },
    closed: { 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
  };

  return (
    <motion.div
      ref={sliderRef}
      className={styles.cartSlider}
      initial="closed"
      animate={isCartOpen ? "open" : "closed"}
      variants={sidebar}
    >
      <h2>Shopping Cart</h2>
      <div className={styles.itemsContainer}>
        {cartItems.map((item, index) => (
          <CartItem item={item} increment={increment} decrement={decrement} key={index} />
        ))}
      </div>
      <div className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</div>
      <button className={styles.checkoutButton}>Checkout</button>
    </motion.div>
  );
};

export default CartSlider;
