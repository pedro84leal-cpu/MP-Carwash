import Banner from '../../Components/Banner-marcacao/banner'
import Botoes from '../../Components/Botoes-interativos/botoes'
import Capa from '../../Components/Capa/capa'
import Footer from '../../Components/Footer/footer'
import Logo from '../../Components/Logo/logo'
import Menu from '../../Components/Menu/Menu'
import Slogan from '../../Components/Slogan/slogan'
import styles from '../Home/Home.module.css'


function Home(){
    return(
        <>
        <div className={styles.geral}>
            <Capa />
            <Menu />
            <Logo />
            <Slogan />
            <Botoes />
            <Footer />
            <Banner />
        </div>
        </>
    )
}

export default Home