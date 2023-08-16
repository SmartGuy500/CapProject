import logo from "../../assets/Capstone.png"
import styles from "./About.module.scss"

const About = ()=>{
    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>
            <h1 className={styles.header}>The About Page</h1>
        </nav>
        </>
    )
}

export default About