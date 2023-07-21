import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from '../css/NavBar.module.css';

const NavBar = ({ onCartClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>OMRAN WARES</h1>
      <div className={styles.navButtonsContainer}>
        <ul className={styles.navBarButtons}>
          <li className={styles.searchButton}>
            <button className={styles.navButton}>
              <FiSearch size={40} />
            </button>
          </li>
          <li className={styles.cart}>
            <button className={styles.navButton} onClick={onCartClick}>
              <AiOutlineShoppingCart size={40} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
