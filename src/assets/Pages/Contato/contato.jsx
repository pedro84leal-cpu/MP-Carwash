import Menu from '../../Components/Menu/Menu'
import styles from '../Contato/contato.module.css'

function Contatos() {
  return (
    <>
    <Menu />
    <div className={styles.page}>

      <div className={styles.header}>
        <p className={styles.tag}>
            GTCarwash — Contactos
        </p>
        <h1 className={styles.titulo}>
          Fale <span className={styles.destaque}>Connosco</span>
        </h1>
        <div className={styles.linha}></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Telefone</p>
          <p className={styles.cardValue}>+351 912 345 678</p>
          <p className={styles.cardSub}>Chamada nacional</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Email</p>
          <p className={styles.cardValue}>geral@gtcarwash.pt</p>
          <p className={styles.cardSub}>Respondemos em 24h</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Morada</p>
          <p className={styles.cardValue}>Rua das Oficinas, 42</p>
          <p className={styles.cardSub}>4780-000 Santo Tirso</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Redes sociais</p>
          <p className={styles.cardValue}>@gtcarwash</p>
          <p className={styles.cardSub}>Instagram · Facebook</p>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>Envie uma Mensagem</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome</label>
            <input type="text" placeholder="O seu nome" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Telefone</label>
            <input type="tel" placeholder="+351 9xx xxx xxx" className={styles.input} />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" placeholder="email@exemplo.com" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Serviço</label>
            <select className={styles.input}>
              <option>Lavagem exterior</option>
              <option>Lavagem interior</option>
              <option>Detailing completo</option>
              <option>Polimento</option>
              <option>Outro</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Mensagem</label>
          <textarea placeholder="Como podemos ajudar?" className={styles.textarea} />
        </div>

        <button className={styles.btn}>Enviar mensagem</button>

        <div className={styles.horario}>
          <p className={styles.horarioTitle}>Horário de funcionamento</p>
          <div className={styles.horarioRow}>
            <span>Segunda — Sexta</span>
            <span className={styles.aberto}>08:00 — 19:00</span>
          </div>
          <div className={styles.horarioRow}>
            <span>Sábado</span>
            <span className={styles.aberto}>09:00 — 17:00</span>
          </div>
          <div className={styles.horarioRow}>
            <span>Domingo</span>
            <span className={styles.fechado}>Fechado</span>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contatos