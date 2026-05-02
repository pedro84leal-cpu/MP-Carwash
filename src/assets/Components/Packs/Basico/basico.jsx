import styles from '../../Packs/packs.module.css'
import { useState } from 'react';
import Reservas from '../../Reservas/reservas';
import Modal from '../../Modal/modal';

function Basico({className}){

    const [reservasAberto, setReservasAberto] = useState(false);
    
        const abrirReservas = () => {
        setReservasAberto(true);
        };
    return(
        <>
         <div className={`${styles.content} ${className}`}>
            <p style={{color:'goldenrod', fontWeight:'bold'}}>
                GT Carwash
            </p>    
            <h1 className={styles.Titulo}>
                Pack Básico
            </h1>
            <p className={styles.Preco}>
                €10,00 
            </p>
    
            <p style={{color:'white'}}>
                O que está incluído:
            </p>
          
            <ul className={styles.ul}>            
                <li className={styles.LiCheck}>Lavagem exterior manual</li>
                <li className={styles.LiCheck}>Secagem com microfibra</li>
                <li className={styles.LiCheck}>Limpeza de jantes</li>
                <li className={styles.LiCheck}>Aspiração interior rápida</li>
                <li className={styles.LiCheck}>Limpeza de plásticos (superficial)</li>
                <li className={styles.LiCheck}>Limpeza de vidros</li>
                <li className={styles.Li}>Lavagem detalhada de jantes</li>
                <li className={styles.Li}>Limpeza profunda do interior</li>
                <li className={styles.Li}>Tratamento de plásticos (hidratação)</li>
                <li className={styles.Li}>Limpeza de estofos (ligeira)</li>
                <li className={styles.Li}>Aplicação de cera rápida (proteção pintura)</li>
            </ul>
            
            <p className={styles.p}>
                ⏱️ Tempo: 30 a 45 min
            </p>
            <button className={styles.Botao} onClick={abrirReservas}>
                Reservar
            </button>   
        </div>
        {reservasAberto && (                                   // Só mostra se o estado for true
            <Modal onClose={() => setReservasAberto(false)}>   {/* Passa a função de fechar */}
                <Reservas/> 
            </Modal>
        )}
        </>

    )
}

export default Basico