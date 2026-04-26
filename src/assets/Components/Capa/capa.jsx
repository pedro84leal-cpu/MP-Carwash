import styles from '../Capa/capa.module.css'
import img from '../../Images/Por.webp'
import logo from '../../Images/logo.webp'
import Botoes from '../Botões-interativos/botões'
import footer from '../../Images/footer.webp'
import Banner from '../Banner-marcacao/banner'
import Menu from '../Menu/Menu'


function Capa() {
    return (
        <>
        <Menu />
        <div className={styles.capa}>
            <picture>
                <img src={img} alt="Capa" className={styles.imagem} />
            </picture>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImagem} />
            </div>
            <div className={styles.slogan}>
                <h1 className={styles.textoBranco}>
                    Cuidado
                </h1>
                <h1 className={styles.textoDourado}>
                    que se vê.
                </h1>
                <hr className={styles.divisor}></hr>
                <h1 className={styles.textoBranco}>
                    Brilho que
                </h1>
                <h1 className={styles.textoDourado}>
                    se sente.
                </h1>
                <hr className={styles.divisor1}></hr>            
            </div>
            <div className={styles.slogan2}>
                <p className={styles.pBranco} >
                    Lavagens, polientos e detalhes que <br></br>
                    valorizam o que você tem de <br></br>
                    mais importante:
                </p>
                <p className={styles.pDourado}>
                    o seu carro.
                </p>
            </div>
            <Botoes />
            <div className={styles.footer}>
                <img src={footer} alt='rodape' className={styles.footerImg} />
            </div>
            <Banner />
        </div>
       </>
    )
}

export default Capa