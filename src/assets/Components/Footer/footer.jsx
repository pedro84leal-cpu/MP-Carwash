import { useEffect, useRef } from 'react'
import styles from '../Footer/footer.module.css'
import produtos from '../../Images/produtos1.png'
import atendimentos from '../../Images/atendimento1.png'
import profissionais from '../../Images/profissionais1.png'

function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adiciona a classe quando entra no ecrã
            entry.target.querySelectorAll(`.${styles.navLink}`).forEach((el, i) => {
              el.style.animationDelay = `${i * 0.2}s`
              el.classList.add(styles.visivel)
            })
            observer.disconnect() // para de observar depois de animar
          }
        })
      },
      { threshold: 0.2 } // dispara quando 20% do elemento está visível
    )

    if (footerRef.current) observer.observe(footerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.footer} ref={footerRef}>
      <div className={styles.navLink}>
        <img src={produtos} alt="Lavagens" className={styles.footerImg} />
        <span className={styles.span}>Produtos</span>
        <small className={styles.small}>Premium</small>
      </div>

      <div className={styles.navLink}>
        <img src={profissionais} alt="Lavagens" className={styles.footerImg} />
        <span className={styles.span}>Profissionais</span>
        <small className={styles.small}>Especializados</small>
      </div>

      <div className={styles.navLink}>
        <img src={atendimentos} alt="Lavagens" className={styles.footerImg} />
        <span className={styles.span}>Serviços</span>
        <small className={styles.small}>Agendados</small>
      </div>
    </div>
  )
}

export default Footer