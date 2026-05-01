import Banner from '../../Components/Banner-marcacao/banner'
import Botoes from '../../Components/Botoes-interativos/botoes'
import Feedback from '../../Components/Feedback/feedback'
import Logo from '../../Components/Logo/logo'
import Menu from '../../Components/Menu/Menu'
import Basico from '../../Components/Packs/Basico/basico'
import Premium from '../../Components/Packs/Premium/premium'
import Standard from '../../Components/Packs/Standard/standard'
import Slogan from '../../Components/Slogan/slogan'
import styles from '../Home/Home.module.css'
import feed from '../../Images/feed.png'
import Footer from '../../Components/Footer/footer'


function Home(){
    return(
        <>
        <div className={styles.geral}>
            <Logo  />
            <Menu />           
            <Slogan />
            <Botoes />
            <Banner />
            
        </div>   
        <div className={styles.second}>
            <div className={styles.header}>
                <p className={styles.smallText}>Preçário GT Carwash</p>
                <h3 className={styles.headerText}> Escolha o Tipo de Lavagem</h3>
            </div>
            <div className={styles.packWrapper}>                
                <div>
                  <Basico className={styles.basicoHomePage} />
                </div>

                <div>
                    <Standard className={styles.standardHomePage} />
                </div>

                <div>
                    <Premium className={styles.premiumHomePage} />
                </div>
            </div>
        </div>  
        <div className={styles.third}>
            <div className={styles.packWrapper2}>
                <div className={styles.quadrado}>
                    <img src={feed} alt='feed' className={styles.imagemFeed} />
                </div>
                <div className={styles.quadrado2}>
                    <Feedback />
                    <p className={styles.smalltext}>
                        Ajude-nos a melhorar — dê-nos o seu feedback.
                    </p>
                    <button className={styles.botaoFeed}>
                        Deixar Feedback
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.footerElementos}>
                <Footer />
            </div>
        </div>             
        </>
    )
}

export default Home