import lavagem from '../../Images/lavagens.webp'
import polimentos from '../../Images/polimentos.webp'
import detail from '../../Images/detail.webp'
import styles from './botoes.module.css'


function Botoes(){
    return(
        <>
        <div className={styles.botoes}>
            <a href="galeria-lavagens.html" className={styles.navLink}>
                <img src={lavagem} alt="Lavagens" className={styles.botoesLink} />
                <span className={styles.span}>Lavagens</span>
                <small className={styles.small}>Especiais</small>
            </a>

            <a href="galeria-polimentos.html" className={styles.navLink}>
                <img src={polimentos} alt="Polimentos" className={styles.botoesLink} />
                <span className={styles.span}>Polimentos</span>
                <small className={styles.small}>Profissionais</small>
            </a>

            <a href="galeria-detail.html" className={styles.navLink}>
                <img src={detail} alt="Detail" className={styles.botoesLink} />
                <span className={styles.span}>Detail</span>
                <small className={styles.small}>Completo</small>
            </a>

        </div>
         
        </>

    )
}

export default Botoes