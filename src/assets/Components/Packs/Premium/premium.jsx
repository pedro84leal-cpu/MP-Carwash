import styles from '../Premium/premium.module.css'


function Premium(){
    return(
        <>
        <div className={styles.premium}>
            <h1 className={styles.premiumTitulo}>
                💎Pack Premium💎
            </h1>
            <h2>
                Para quem quer o carro como novo!
            </h2>
            <ul>            
                <li>Tudo do Pack Standard</li>
                <li>Descontaminação da pintura</li>
                <li>Polimento (ligeiro ou 1 etapa)</li>
                <li>Tratamento de pneus (brilho)</li>
                <li>Limpeza profunda de estofos (tecido ou pele)</li>
                <li>Proteção de pintura (cera ou selante)</li>
                <li>Detalhe de zonas difíceis (grelhas, emblemas, etc.)</li>
            </ul>
            <p>
                💰 Preço: 60€ {'/'}⏱️ Tempo: 3h a 6h min
            </p>   


        </div>
        </>

    )
}

export default Premium