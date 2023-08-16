import logo from "../../assets/Capstone.png"
import styles from "./nav.module.scss"

const Navbar = ()=>{
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}/>
            </div>
            <div className={styles.input}>
                <input type="text" />
            </div>
        </nav>
        </>
    )
}

export default Navbar