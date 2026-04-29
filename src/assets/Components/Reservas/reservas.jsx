import Menu from '../Menu/Menu'
import Basico from '../Packs/Basico/basico';
import Premium from '../Packs/Premium/premium';
import Standard from '../Packs/Standard/standard';
import styles from '../Reservas/reservas.module.css'
import { useState} from 'react';


function Reservas() {

  const [pack, setPack] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  return (
    <>
    <Menu />
    <form className={styles.formMar}>
      <h2 className={styles.titulo}>
        Reserva
      </h2>

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
          placeholder="O seu contacto"
          required
        />
      </div>
      
      <div className={styles.campo}>
        <label htmlFor="pack">Escolha o pack</label>
          <select
          name="pack"
          id="pack"
          value={pack}
          onChange={(e) => setPack(e.target.value)}
          required
        >
          <option value="">Selecione um pack...</option>
          <option value="basico">Pack Básico</option>
          <option value="standard">Pack Standard</option>
          <option value="premium">Pack Premium</option>
        </select>
      </div>

      <div className={styles.campo}>
        <label htmlFor="data">Data</label>
        <input
          type="date"
          name="data"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          name="hora"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.botao}>
        Marcar
      </button>
    </form>
    <Basico />
    <Standard />
    <Premium />
    
    </>
  )
}

export default Reservas

