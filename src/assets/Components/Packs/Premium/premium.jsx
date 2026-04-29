import styles from '../Premium/premium.module.css'


function Premium(){
    return(
        <>
        <div className={styles.premium}>
            <h1 className={styles.premiumTitulo}>
                💎Pack Premium💎
            </h1>
            <h2 className={styles.premiumH2}>
                Para quem quer o carro como novo!
            </h2>
            <ul className={styles.premiumUl}>            
                <li className={styles.premiumLi}>Tudo do Pack Standard</li>
                <li className={styles.premiumLi}>Descontaminação da pintura</li>
                <li className={styles.premiumLi}>Polimento (ligeiro ou 1 etapa)</li>
                <li className={styles.premiumLi}>Tratamento de pneus (brilho)</li>
                <li className={styles.premiumLi}>Limpeza profunda de estofos (tecido ou pele)</li>
                <li className={styles.premiumLi}>Proteção de pintura (cera ou selante)</li>
                <li className={styles.premiumLi}>Detalhe de zonas difíceis (grelhas, emblemas, etc.)</li>
            </ul>
            <p className={styles.premiumP}>
                💰 Preço: 60€ {'/'}⏱️ Tempo: 3h a 6h min
            </p>   


        </div>
        </>

    )
}

export default Premium