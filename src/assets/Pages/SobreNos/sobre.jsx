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

            <div className={styles.missaoSection}>
                <div className={styles.missaoTexto}>
                    <p className={styles.missaoTag}>
                        A nossa missão
                    </p>
                       <h2 className={styles.missaoTitulo}>
                        Mais do que uma lavagem,<br />uma experiência.
                    </h2>
                </div>
                <div className={styles.missaoTexto}>
                 
                    <p className={styles.missaoDesc}>
                    Na GTCarwash, acreditamos que um carro limpo reflete o cuidado do seu dono. 
                    O nosso objetivo é oferecer um serviço de excelência, com produtos premium 
                    e profissionais especializados, para que o seu veículo esteja sempre em 
                    perfeitas condições.
                    </p>
                </div>
            </div>

            <div className={styles.valoresGrid}>
                <div className={styles.valorCard}>
                <h3 className={styles.valorTitulo}>
                    Qualidade
                </h3>
                <p className={styles.valorDesc}>
                    Usamos apenas produtos certificados e técnicas profissionais para garantir o melhor resultado.
                </p>
                </div>
                <div className={styles.valorCard}>
                <h3 className={styles.valorTitulo}>Confiança</h3>
                <p className={styles.valorDesc}>Tratamos cada veículo como se fosse nosso, com responsabilidade e total transparência.</p>
                </div>
                <div className={styles.valorCard}>
                <h3 className={styles.valorTitulo}>Pontualidade</h3>
                <p className={styles.valorDesc}>Respeitamos o seu tempo. Os serviços são entregues dentro do prazo acordado, sempre.</p>
                </div>
                <div className={styles.valorCard}>
                <h3 className={styles.valorTitulo}>Paixão</h3>
                <p className={styles.valorDesc}>Somos apaixonados por automóveis e isso reflete-se em cada detalhe do nosso trabalho.</p>
                </div>
            </div>
        </div>
        </>

    )
}

export default Sobre