import styles from '../Menu/Menu.module.css'
import { useState } from 'react';
import Reservas from '../Reservas/reservas'
import Modal from '../Modal/modal'
import { NavLink } from 'react-router-dom'



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
                <NavLink to='/' className={({ isActive }) => isActive ? styles.linkAtivo : styles.link}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        GTCarwash
                </NavLink>

                <NavLink to='/servicos' className={({ isActive }) => isActive ? styles.linkAtivo : styles.link}>
                    Serviços
                </NavLink>

                <NavLink to='/sobre' className={({ isActive }) => isActive ? styles.linkAtivo : styles.link} >
                    Sobre Nós
                </NavLink>

                <NavLink to='/contato' className={({ isActive }) => isActive ? styles.linkAtivo : styles.link} >
                     Contactos
                </NavLink>

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