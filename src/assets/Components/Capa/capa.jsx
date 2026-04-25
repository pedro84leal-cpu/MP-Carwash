import styles from '../Capa/capa.module.css'
import imgDesktop from '../../Images/desktop.png'
import imgMobile from '../../Images/mobile.jpg'

function Capa() {
    return (
        <div className={styles.capa}>
            <picture>
                <source media="(max-width: 480px)" srcSet={imgMobile} />
                <img src={imgDesktop} alt="Capa" className={styles.imagem} />
            </picture>
        </div>
    )
}

export default Capa