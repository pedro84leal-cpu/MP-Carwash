import styles from '../Slogan/slogan.module.css'


function Slogan(){
    return(
        <>
        <div className={styles.slogan}>
            <h1 className={styles.textoBranco}>
                Cuidado
            </h1>
            <h1 className={styles.textoDourado}>
                que se vê.
            </h1>
            <hr className={styles.divisor}></hr>
            <h1 className={styles.textoBranco}>
                Brilho que
            </h1>
            <h1 className={styles.textoDourado}>
                se sente.
            </h1>
            <hr className={styles.divisor1}></hr>            
            </div>
        <div className={styles.slogan2}>
            <p className={styles.pBranco} >
                Lavagens, polientos e detalhes que <br></br>
                valorizam o que você tem de <br></br>
                mais importante:
            </p>
            <p className={styles.pDourado}>
                o seu carro.
            </p>
        </div>
        </>

    )
}

export default Slogan