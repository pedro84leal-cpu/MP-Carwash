import styles from '../Menu/Menu.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Reservas from '../Reservas/reservas'
import Modal from '../Modal/modal'



function Menu(){

   const [reservasAberto, setReservasAberto] = useState(false);

    const abrirReservas = () => {
    setReservasAberto(true);
    };
    
    return(
    <>
    <div className={styles.container}>       
        <div className={styles.menu}>
        
            <nav className={styles.nav}>
                <Link to='/' className={styles.link}>
                    GTCarwsh
                </Link>

                <Link to='/servicos' className={styles.link}>
                    Serviços
                </Link>

                <Link to='/galeria' className={styles.link}>
                    Galeria
                </Link>

                <Link to='/home' className={styles.link} >
                    Sobre Nós
                </Link>

                <Link to='/home' className={styles.link}>
                     Contactos
                </Link>

                <span className={styles.link} 
                    style={{color:'black', border:'1px solid goldenrod', 
                    borderRadius:'10px', padding:'5px', backgroundColor:'goldenrod', fontWeight:'bold', cursor:'pointer'}} 
                    onClick={abrirReservas}>
                    Reservar
                </span>
            </nav>
        </div>

        {reservasAberto && (                                   // Só mostra se o estado for true
            <Modal onClose={() => setReservasAberto(false)}>   {/* Passa a função de fechar */}
                <Reservas/> 
            </Modal>
        )}

    </div>
    </>
    )
}

export default Menu