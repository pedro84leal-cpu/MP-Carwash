import styles from '../BotaoReservar/boatoR.module.css'
import { useState } from 'react';
import Reservas from '../Reservas/reservas';
import Modal from '../Modal/modal';


function BotaoReservar(){
    
    const [reservasAberto, setReservasAberto] = useState(false);
        
    const abrirReservas = () => {
        setReservasAberto(true);
    };

    return(
        <> 
        <button className={styles.Botao} onClick={abrirReservas}>
            Reservar
        </button>
       {reservasAberto && (                                   // Só mostra se o estado for true
            <Modal onClose={() => setReservasAberto(false)}>   {/* Passa a função de fechar */}
                <Reservas/> 
            </Modal>
        )}
        </>

    )
}

export default BotaoReservar