
import styles from '../css/SubMenu.module.css'


const SubMenu = ({handleCategoryChange, category}) => {


return(

    <div className={styles.container}>
        <div className={styles.selectedCategoryHeader}>
            <div style={{fontSize: "20px",}}>Selected Category:</div>
            <div className={styles.selectedSubmenu}>{category}</div>
        </div>
        <ul className={styles.subMenus}>
            <li >
                <button className={styles.item} onClick={() => handleCategoryChange("All")}>All</button>
            </li>
            <li >
                <button className={styles.item} onClick={() => handleCategoryChange("Processor")}>Processors</button>
            </li><li >
                <button className={styles.item} onClick={() => handleCategoryChange("Memory")}>Memory</button>
            </li><li >
                <button className={styles.item} onClick={() => handleCategoryChange("Video Card")}>Video Cards</button>
            </li><li >
                <button className={styles.item} onClick={() => handleCategoryChange("Chassis")}>Chassis</button>
            </li>
        </ul>

    </div>

)


}

export default SubMenu;