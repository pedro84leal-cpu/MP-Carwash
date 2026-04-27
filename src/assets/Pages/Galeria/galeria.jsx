import Banner from '../../Components/Banner-marcacao/banner'
import CarouselBook from '../../Components/CarouselBook/carouselBook'
import Hero from '../../Components/Hero/Hero'
import Menu from '../../Components/Menu/Menu'
import styles from '../Galeria/galeria.module.css'

function Galeria(){
    return(
        <>
        <Menu />
        <div className={styles.container}>
            <Hero />
            <div className={styles.content}>
                    <CarouselBook />
                    <Banner />           
            </div>
        </div>
        </>
    )
}

export default Galeria