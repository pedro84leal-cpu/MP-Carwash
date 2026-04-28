import styles from '../Logo/logo.module.css'
import logo from '../../Images/logo.png'


function Logo(){
    return(
        <>
            <div className={styles.logo}>
                <img src={logo} alt='' className={styles.logoImagem} />
            </div>
        </>

    )
}

export default Logo