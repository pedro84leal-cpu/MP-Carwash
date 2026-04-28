import styles from '../Footer/footer.module.css'
import footer from '../../Images/footer.webp'


function Footer(){
    return(
        <>
        <div className={styles.footer}>
            <img src={footer} alt='rodape' className={styles.footerImg} />
        </div>
        </>
    )
}

export default Footer