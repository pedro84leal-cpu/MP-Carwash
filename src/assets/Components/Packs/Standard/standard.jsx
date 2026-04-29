import styles from '../Standard/standard.module.css'


function Standard(){
    return(
        <>
        <div className={styles.standard}>
            <h1 className={styles.standardTitulo}>
                ✨ Pack Standard
            </h1>
            <h2 className={styles.standardH2}>
                Mais detalhe + melhor acabamento!
            </h2>
            <ul>            
                <li className={styles.standardLi}>Tudo do Pack Básico</li>
                <li className={styles.standardLi}>Lavagem detalhada de jantes</li>
                <li className={styles.standardLi}>Limpeza profunda do interior</li>
                <li className={styles.standardLi}>Tratamento de plásticos (hidratação)</li>
                <li className={styles.standardLi}>Limpeza de estofos (ligeira)</li>
                <li className={styles.standardLi}>Aplicação de cera rápida (proteção pintura)</li>
            </ul>
            <p className={styles.standardP}>
                💰 Preço: 20€ {'/'}⏱️ Tempo: 1h a 1h:30min
            </p>   


        </div>
        </>

    )
}

export default Standard