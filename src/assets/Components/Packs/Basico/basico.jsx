import styles from '../Basico/basico.module.css'


function Basico(){
    return(
        <>
        <div className={styles.basico}>
            <h1 className={styles.basicoTitulo}>
                Pack Básico
            </h1>
            <h2 className={styles.basicoH2}>
                Para quem quer o carro limpo no dia a dia!
            </h2>
            <ul>            
                <li className={styles.basicoLi}>Lavagem exterior manual</li>
                <li className={styles.basicoLi}>Secagem com microfibra</li>
                <li className={styles.basicoLi}>Limpeza de jantes</li>
                <li className={styles.basicoLi}>Aspiração interior rápida</li>
                <li className={styles.basicoLi}>Limpeza de plásticos (superficial)</li>
                <li className={styles.basicoLi}>Limpeza de vidros</li>
            </ul>
            <p className={styles.basicoP}>
                💰 Preço: 10€ {'/'}⏱️ Tempo: 30 a 45 min
            </p>   


        </div>
        </>

    )
}

export default Basico