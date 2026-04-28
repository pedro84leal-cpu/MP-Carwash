import Banner from '../../Components/Banner-marcacao/banner'
import Hero from '../../Components/Hero/Hero'
import Menu from '../../Components/Menu/Menu'
import styles from '../Galeria/galeria.module.css'
import Slide from '../../Components/Slide/slide'

function Galeria(){
    return(
        <>
        <Menu />
        <div className={styles.container}>
            <Hero />
            <div className={styles.content}>
                <Slide />
                <Banner />           
            </div>
        </div>
        </>
    )
}

export default Galeria