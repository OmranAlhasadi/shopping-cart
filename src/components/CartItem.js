
import styles from '../css/CartItem.module.css'

const CartItem = ({item, increment, decrement}) => {


    const id = item.id

    return(
        
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <div className={styles.quantityControls}>
              <button className={styles.qbutton} onClick={() => decrement(item.id)}>-</button>
              <div>{item.quantity}</div>
              <button className={styles.qbutton} onClick={() => increment(item.id)}>+</button>
            </div>
          </div>
        </div>
        
    )
}

export default CartItem;