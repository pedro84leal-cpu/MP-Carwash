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
import BotaoReservar from '../../Components/BotaoReservar/botaoR'


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
            <div className={styles.navFooter}>
                <Footer />
                <div className={styles.contRect}>
                    <div className={styles.rect}>
                        <div className={styles.textButton}>
                            <h1 className={styles.textRect}>
                                {'Saiba onde\nnos pode\nEncontar'}
                            </h1>
                            <BotaoReservar />                          
                        </div>                       
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.5814037778666!2d-8.508533386610386!3d41.34881486863601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245f3f7364e6c3%3A0xbc4a6eae65deb13b!2sTelheiras%202%20(Santo%20Tirso)!5e0!3m2!1spt-PT!2spt!4v1777796422097!5m2!1spt-PT!2spt"
                            width="70%"
                            height="100%"
                            style={{ borderRadius:'15px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />                        
                    </div>                    
                </div>
            </div>
        </div>           
        </>
    )
}

export default Home