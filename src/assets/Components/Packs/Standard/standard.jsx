import styles from '../Standard/standard.module.css'


function Standard(){
    return(
        <>
        <div className={styles.standard}>
            <h1 className={styles.standardTitulo}>
                ✨ Pack Standard
            </h1>
            <h2>
                Mais detalhe + melhor acabamento!
            </h2>
            <ul>            
                <li>Tudo do Pack Básico</li>
                <li>Lavagem detalhada de jantes</li>
                <li>Limpeza profunda do interior</li>
                <li>Tratamento de plásticos (hidratação)</li>
                <li>Limpeza de estofos (ligeira)</li>
                <li>Aplicação de cera rápida (proteção pintura)</li>
            </ul>
            <p>
                💰 Preço: 20€ {'/'}⏱️ Tempo: 1h a 1h:30min
            </p>   


        </div>
        </>

    )
}

export default Standard