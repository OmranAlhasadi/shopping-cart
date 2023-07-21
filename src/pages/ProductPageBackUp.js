import styles from '../css/ProductPage.module.css'
import NavBar from '../components/NavBar'
import SubMenu from '../components/SubMenu'
import ProductCatalog from '../components/ProductCatalog'
import allProducts from '../data/allProducts'



const ProductPage = () => {


    return(


        <div className={styles.container}>
            <NavBar />
            <div className={styles.pageBody}>
            <SubMenu />
            <ProductCatalog list={allProducts}/>

            </div>
            
        </div>



    )


}

export default ProductPage;