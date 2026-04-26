import Menu from '../Menu/Menu'
import styles from '../Reservas/reservas.moduele.css'

function Reservas() {
  return (
    <>
    <Menu />
    <form className={styles.formMar}>
      <h2 className={styles.titulo}>Marcação</h2>

      <div className={styles.campo}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="O seu nome completo"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="email">Contacto</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="O seu melhor email"
          required
        />
      </div>

      <button type="submit" className={styles.botao}>
        Marcar
      </button>
    </form>
    </>
  )
}

export default Reservas

