import styles from '../Menu/Menu.module.css'
import {Link} from 'react-router-dom'



function Menu(){
    return(
    <>
    <div className={styles.container}>       
        <div className={styles.menu}>
        
            <nav className={styles.nav}>
                <Link to='/' className={styles.link}>
                    Home
                </Link>

                <Link to='/home' className={styles.link}>
                    Pack's
                </Link>

                <Link to='/galeria' className={styles.link}>
                    Galeria
                </Link>

                <Link to='/home' className={styles.link}>
                    Contato
                </Link>
            </nav>
        </div>
    </div>
    </>
    )
}

export default Menu