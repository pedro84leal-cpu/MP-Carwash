import Menu from '../../Components/Menu/Menu'
import styles from '../Servicos/servicos.module.css'
import servImg from '../../Images/servicos.png'
import img1 from '../../Images/cadeira.png'
import img2 from '../../Images/tablier.png'
import img3 from '../../Images/alcatrao.png'
import img4 from '../../Images/tapete.png'
import img5 from '../../Images/higie.png'




function Servicos(){
    return(
        <>           
        <div className={styles.servContent}>
            <Menu />
            <div className={styles.servTitulo}>
                <h1 className={styles.servTituloLogo}>
                    GT Carwash
                </h1>
                <h1 className={styles.servTituloText}>
                    {' Conheça os nossos serviços de lavagem'}
                </h1>
                <img src={servImg} alt='imagem do titulo' className={styles.servTituiloImg} />
            </div>
           <div className={styles.header}>
                <p className={styles.smallText}>Preçário GT Carwash</p>
                <h3 className={styles.headerText}> Os nossos serviços extra</h3>
            </div>
            <div className={styles.gridServ}>
                <div className={styles.gridServPo}>
                    <div className={styles.gridImg}>
                        <img src={img1} alt='' className={styles.img} />   
                    </div>
                    <div className={styles.gridDesc}>
                        <p className={styles.textP}>
                            Estofos de tecido e de Pele
                        </p>
                        <p className={styles.textSmall}>
                            Inclui lavagem completa de Estofos de tecido e de Pele (pack)
                        </p>
                        <p className={styles.price}>
                                €70,00
                        </p>
                    </div>
                </div>
                <div className={styles.gridServPo}>
                    <div className={styles.gridImg}>
                        <img src={img2} alt='' className={styles.img} />   
                    </div>
                    <div className={styles.gridDesc}>
                        <p className={styles.textP}>
                           Tablier
                        </p>
                        <p className={styles.textSmall}>
                            Limpeza e hidratação dos componentes dos tablier
                        </p>
                        <p className={styles.price}>
                                €15,00
                        </p>
                    </div>
                </div>
                <div className={styles.gridServPo}>
                    <div className={styles.gridImg}>
                        <img src={img3} alt='' className={styles.img} />   
                    </div>
                    <div className={styles.gridDesc}>
                        <p className={styles.textP}>
                           Alcatrão e Resinas
                        </p>
                        <p className={styles.textSmall}>
                            Remoção de alcatrão e resinas
                        </p>
                        <p className={styles.price}>
                                €15,00
                        </p>
                    </div>
                </div>
                <div className={styles.gridServPo}>
                    <div className={styles.gridImg}>
                        <img src={img4} alt='' className={styles.img} />   
                    </div>
                    <div className={styles.gridDesc}>
                        <p className={styles.textP}>
                           Tapetes
                        </p>
                        <p className={styles.textSmall}>
                            Lavagem de tapetes (kit Completo)
                        </p>
                        <p className={styles.price}>
                                €25,00
                        </p>
                    </div>
                </div>
                <div className={styles.gridServPo}>
                    <div className={styles.gridImg}>
                        <img src={img5} alt='' className={styles.img} />   
                    </div>
                    <div className={styles.gridDesc}>
                        <p className={styles.textP}>
                           Higienização
                        </p>
                        <p className={styles.textSmall}>
                            Lavagem profunda estofos, alcatifas e bagageira
                        </p>
                        <p className={styles.price}>
                                €120,00
                        </p>
                    </div>                    
                </div>
            </div>           
        </div>
        </>

    )
}

export default Servicos