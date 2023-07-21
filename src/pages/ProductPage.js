import { useState } from 'react';
import styles from '../css/ProductPage.module.css';
import NavBar from '../components/NavBar';
import SubMenu from '../components/SubMenu';
import ProductCatalog from '../components/ProductCatalog';
import CartSlider from '../components/CartSlider';
import allProducts from '../data/allProducts';
import AddProduct from '../components/AddProduct';

const ProductPage = () => {
    

    //cart
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
    const handleCartClick= ()=> {

    setCartOpen(!isCartOpen)

  }
    //category
    const [selectedCategory, setCategory] = useState("All");

    const [productList, setProductList] = useState(allProducts);

  

    const handleCategoryChange = (category) => {

        if(category === "All"){
        setProductList(allProducts)
        setCategory("All")
        } else
        {const filteredProductList = allProducts.filter(
            (product) => product.category === category
        );
         setProductList(filteredProductList);
        setCategory(category)}
     };


     //add product

     const [isAddProductOpen, setAddProductOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    

    const increment = (pId) => {
      let newCartItems = [...cartItems];
      let itemIndex = newCartItems.findIndex(item => item.id === pId);
      if (itemIndex >= 0) {
          newCartItems[itemIndex].quantity += 1;
      } else {
          newCartItems.push({ ...currentProduct, quantity: 1 });
      }
      setCartItems(newCartItems);
  }
    
  const decrement = (pId) => {
    let newCartItems = [...cartItems];
    let itemIndex = newCartItems.findIndex(item => item.id === pId);
    if (itemIndex >= 0) {
        newCartItems[itemIndex].quantity -= 1;
        if (newCartItems[itemIndex].quantity === 0) {
            newCartItems.splice(itemIndex, 1);
        }
    }
    setCartItems(newCartItems);
}



    const handleProductClick = (product) => {
        setCurrentProduct(product);
        setAddProductOpen(true);
    }

    const closeAddProduct = () => {
        setAddProductOpen(false);
        setCurrentProduct(null);
    }
  

  

  return (
    <div className={styles.container}>
      <NavBar onCartClick={handleCartClick}/>
      <div className={styles.pageBody}>
        <SubMenu handleCategoryChange={handleCategoryChange} category={selectedCategory}/>
        <ProductCatalog list={productList} onProductClick={handleProductClick}/>
      </div>
      {isAddProductOpen && currentProduct && <AddProduct product={currentProduct} cartItems={cartItems} increment={increment} decrement={decrement} onClose={closeAddProduct} />}
      {isCartOpen && <CartSlider cartItems={cartItems} onClose={handleCartClick} increment={increment} decrement={decrement} />}
    </div>
  );
};

export default ProductPage;
