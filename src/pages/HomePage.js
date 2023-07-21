import React from "react";
import styles from '../css/HomePage.module.css'
import bgImage from '../images/rtx-3090.jpg'
import {Link} from 'react-router-dom'



const HomePage = () => {


    return (
        

        <div style={{backgroundImage: `url(${bgImage})`}} className={styles.container}>
            <div   className={styles.homePageMiddle} >
                <h1 className={styles.title}>Welcome To My Computer Shop</h1>
                <Link to="/catalog" className={styles.shopNowButton}>Shop Now</Link>
                

            </div>
        </div>



       
    )



}

export default HomePage;