import styles from '../../Packs/packs.module.css'


function Premium({className}){
    return(
        <>
        <div className={`${styles.content} ${className}`}>
            <p style={{color:'goldenrod', fontWeight:'bold'}}>
                GT Carwash
            </p> 
            <h1 className={styles.Titulo}>
                💎Pack Premium💎
            </h1>
            <p className={styles.Preco}>
                €60,00 
            </p>

            <p style={{color:'white'}}>
                O que está incluído:
            </p>
          
            <ul className={styles.Ul}>            
                <li className={styles.LiCheck}>Lavagem exterior manual</li>
                <li className={styles.LiCheck}>Limpeza profunda do interior</li>
                <li className={styles.LiCheck}>Tratamento de plásticos (hidratação)</li>
                <li className={styles.LiCheck}>Limpeza profunda de estofos (tecido ou pele) </li>
                <li className={styles.LiCheck}>Colocação de cera de proteção da pintura</li>
                <li className={styles.LiCheck}>Descontaminação da pintura</li>
                <li className={styles.LiCheck}>Polimento retificador</li>
                <li className={styles.LiCheck}>Tratamento de pneus (brilho) e jantes</li>
                <li className={styles.LiCheck}>Ambientador à escolha do cliente</li>
                <li className={styles.LiCheck}>Polimento de farois</li>
                <li className={styles.LiCheck}>Detalhe de zonas difíceis (grelhas, emblemas, etc.)</li>
            </ul>
            <p className={styles.p}>
                ⏱️ Tempo: 3h a 6h min
            </p>
            <button className={styles.Botao}>
                Reservar
            </button>    
        </div>
        </>

    )
}

export default Premium