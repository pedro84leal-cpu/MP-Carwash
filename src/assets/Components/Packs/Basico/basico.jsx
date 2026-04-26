import styles from '../Basico/basico.module.css'


function Basico(){
    return(
        <>
        <div className={styles.basico}>
            <h1 className={styles.basicoTitulo}>
                Pack Básico
            </h1>
            <h2>
                Para quem quer o carro limpo no dia a dia!
            </h2>
            <ul>            
                <li>Lavagem exterior manual</li>
                <li>Secagem com microfibra</li>
                <li>Limpeza de jantes</li>
                <li>Aspiração interior rápida</li>
                <li>Limpeza de plásticos (superficial)</li>
                <li>Limpeza de vidros</li>
            </ul>
            <p>
                💰 Preço: 10€ {'/'}⏱️ Tempo: 30 a 45 min
            </p>   


        </div>
        </>

    )
}

export default Basico