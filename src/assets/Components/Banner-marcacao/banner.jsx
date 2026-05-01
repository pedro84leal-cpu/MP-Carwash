import { useState, useEffect } from 'react';
import styles from './banner.module.css';
import { Link } from 'react-router-dom'

function Banner() {

const [visivel, setVisivel] = useState(false); // começa visível

useEffect(() => {
  let timer;

  const cicloVisibilidade = (estaVisivel) => {
    if (estaVisivel) {
      // Está visível, programa para ficar invisível depois de 5s
      timer = setTimeout(() => {
        setVisivel(false);
      }, 5000);
    } else {
      // Está invisível, programa para ficar visível depois de 3s
      timer = setTimeout(() => {
        setVisivel(true);
      }, 3000);
    }
  };

  // Inicia o primeiro ciclo (começa visível)
  cicloVisibilidade(true);

    return () => clearTimeout(timer);
  }, []);

  // Este useEffect observa as mudanças de "visivel" para continuar o ciclo
  useEffect(() => {
    let timer;

    if (visivel) {
      timer = setTimeout(() => setVisivel(false), 8000);
    } else {
      timer = setTimeout(() => setVisivel(true), 3000);
    }

    return () => clearTimeout(timer);
  }, [visivel]);

  return (
    <section
      className={`${styles.tela} ${visivel ? styles.visivel : styles.escondido}`}
    >
      <div className={styles.texto}>
        <h2>
          Faça já a sua{' '}
          <span className={styles.textoDourado}>Reserva!</span>
        </h2>
        <p>Reserve em segundos - rápido e fácil</p>
      </div>
      <div>
        <Link to="/reservas" className={styles.botao}>
          Reserve já
        </Link>
      </div>
    </section>
  );
}

export default Banner;