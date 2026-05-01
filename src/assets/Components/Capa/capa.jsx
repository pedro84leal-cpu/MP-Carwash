import styles from '../Capa/capa.module.css'
import img from '../../Images/Por.webp'


function Capa() {
    return (
        <>
        <div className={styles.capa}>
            <picture >
                <img src={img} alt="Capa" className={styles.imagem}  />
            </picture>
        </div>
       </>
    )
}

export default Capa