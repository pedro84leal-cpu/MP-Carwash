import Capa from '../../Components/Capa/capa'
import Menu from '../../Components/Menu/Menu'
import styles from '../Packs/paks.module.css'
import imagem from '../../Images/img3.png'
import imagem2 from '../../Images/img4.png'
import imagem3 from '../../Images/img7.png'
import Banner from '../../Components/Banner-marcacao/banner'



function Paks(){
    return(
        <>
        <Menu />
        <Banner />
        <div className={styles.paks}>
            <Capa />
            <div className={styles.contentPak}>
                <div className={styles.packBasico}>
                    <h1 className={styles.packBasicoTitulo}>Pack Básico</h1>
                    <div className={styles.gridA}>
                        <img src={imagem} className={styles.imagem1Basico} />
                    </div>
                    <div className={styles.gridB}>
                        <h2 style={{color:'goldenrod', fontSize:'1.5rem', padding:'5px'}}>
                            <hr style={{width:'90px', border:'1px solid goldenrod'}}></hr>
                            Para quem quer o carro limpo no dia a dia!
                        </h2>
                    <section className={styles.desBasico}>
                        <p className={styles.paragrafo}>
                            O Pack Básico da GT Carwash foi desenvolvido para garantir uma limpeza completa e 
                            segura do seu veículo, mantendo a sua estética cuidada no dia a dia.
                        </p>
                    
                        <p className={styles.paragrafo}>
                            Utilizamos exclusivamente produtos de gama alta e técnicas adequadas a cada superfície, 
                            assegurando eficácia sem comprometer os materiais.
                        </p>

                        <div className={styles.imagem2}>
                            <img src={imagem2} className={styles.imagem2Basico} />
                            <img src={imagem3} className={styles.imagem3Basico} />
                        </div>
                        
                        <p className={styles.paragrafo}>
                            <strong style={{color:'goldenrod'}}>No exterior</strong>, iniciamos com uma lavagem cuidada utilizando champô automóvel 
                            com pH neutro, que remove sujidade, poeiras e resíduos acumulados sem agredir a pintura.
                        </p>
                        
                        <p className={styles.paragrafo}>
                            <strong style={{color:'goldenrod'}}>As jantes</strong> recebem um tratamento específico com produtos desincrustantes apropriados, 
                            permitindo eliminar sujidade mais persistente como pó de travão.
                        </p>
                        
                        <p className={styles.paragrafo}>
                            De seguida, o veículo é enxaguado e seco manualmente com panos de microfibra de alta qualidade, 
                            evitando marcas de água e micro-riscos.
                        </p>

                        <p className={styles.paragrafo}>
                           <strong style={{color:'goldenrod'}}>Os vidros</strong> exteriores são limpos com produtos próprios, 
                           garantindo transparência e melhor visibilidade durante a condução.
                        </p>

                         <p className={styles.paragrafo}>
                           <strong style={{color:'goldenrod'}}>No interior</strong> , realizamos uma aspiração completa,
                            abrangendo tapetes, alcatifas, bancos e zonas de difícil acesso, removendo poeiras e detritos acumulados.
                        </p>

                        <p className={styles.paragrafo}>
                          Complementamos com uma limpeza básica das superfícies principais, como tablier, 
                          consola central e painéis das portas, eliminando o pó e devolvendo um aspeto mais cuidado ao habitáculo.
                        </p>
                        
                        <h3 style={{color:'goldenrod'}}>
                            Resultado final:
                        </h3>

                        <p className={styles.paragrafo}>
                            Um veículo limpo, fresco e bem apresentado, ideal para manutenção 
                            regular e utilização diária.
                        </p>

                    </section>

                    </div>
                </div>

            </div>

        </div>
        </>

    )
}

export default Paks