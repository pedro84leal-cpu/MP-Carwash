import styles from '../Hero/Hero.module.css'
import hero from '../../Images/hero.png'


function Hero(){
    return(
        <>
        <div className={styles.hero}>
            <img src={hero} alt='Hero' className={styles.heroImg} />
        </div>
        </>

    )
}

export default Hero