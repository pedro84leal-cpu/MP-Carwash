import Menu from '../../Components/Menu/Menu'
import styles from '../SobreNos/sobre.module.css'
import imagem from '../../Images/Por.webp'

function Sobre(){

    return(
        <>
        <Menu />
        <div className={styles.sobreContent}>
            <div className={styles.sobreHeader} >
                <div className={styles.sobreHeaderImg}>
                    <img src={imagem} alt='' className={styles.imgSobre}/>
                </div>
                <div className={styles.textSobre}>
                    <h1>
                        GT Carwash 
                    </h1>
                    <p style={{color:'white', fontSize:'2.8rem', fontWeight:'bold'}}>
                        Cuidamos do seu carro 
                    </p>
                    <p style={{color:'white', fontSize:'2.8rem', fontWeight:'bold'}}>
                        como se fosse nosso 
                    </p>
                </div>
            </div>

        </div>
        </>

    )
}

export default Sobre