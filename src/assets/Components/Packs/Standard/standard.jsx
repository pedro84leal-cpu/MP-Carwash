import BotaoReservar from '../../BotaoReservar/botaoR'
import styles from '../../Packs/packs.module.css'



function Standard({className}){

    return(
        <>
        <div className={`${styles.content} ${className}`}>
            <p style={{color:'goldenrod', fontWeight:'bold'}}>
               GT Carwash
            </p>
            <h1 className={styles.Titulo}>
                ✨ Pack Standard
            </h1>
            <p className={styles.Preco}>
                €20,00
            </p>

            <p style={{color:'white'}}>
                O que está incluído:
            </p>
        
            <ul className={styles.ul}>            
                <li className={styles.LiCheck}>Lavagem detalhada de jantes</li>
                <li className={styles.LiCheck}>Limpeza profunda do interior</li>
                <li className={styles.LiCheck}>Tratamento de plásticos (hidratação)</li>
                <li className={styles.LiCheck}>Limpeza de estofos (ligeira)</li>
                <li className={styles.LiCheck}>Aplicação de cera rápida (proteção pintura)</li>
                <li className={styles.Li}>Descontaminação da pintura</li>
                <li className={styles.Li}>Polimento (ligeiro ou 1 etapa)</li>
                <li className={styles.Li}>Tratamento de pneus (brilho)</li>
                <li className={styles.Li}>Limpeza profunda de estofos (tecido ou pele)</li>
                <li className={styles.Li}>Proteção de pintura (cera ou selante)</li>
                <li className={styles.Li}>Detalhe de zonas difíceis (grelhas, emblemas, etc.)</li>
            </ul>

            <p className={styles.p}>
                ⏱️ Tempo: 1h a 1h:30min
            </p>
            <BotaoReservar /> 
        </div>
        </>

    )
}

export default Standard