import { useState, useEffect } from 'react';
import styles from './banner.module.css';
import { Link } from 'react-router-dom'

function Banner() {

  const [visivel, setVisivel] = useState(false); // começa visível

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisivel(prev => !prev);
    }, 5000); // alterna a cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      className={`${styles.tela} ${visivel ? styles.visivel : styles.escondido}`}
    >
      <div className={styles.texto}>
        <h2>
          Faça já a sua{' '}
          <span className={styles.textoDourado}>marcação!</span>
        </h2>
        <p>Reserve em segundos - rápido e fácil</p>
      </div>
      <div>
        <Link to="/reservas" className={styles.botao}>
          Marcar agora
        </Link>
      </div>
    </section>
  );
}

export default Banner;