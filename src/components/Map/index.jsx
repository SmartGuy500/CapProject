import logo from "../../assets/Capstone.png"
import styles from "./Map.module.scss"


const Map = ()=> {
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
            <h1 className={styles.header}>Map Page</h1>
        </nav>
        </>
    )
}

export default Map