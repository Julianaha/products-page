import styles from "./Formulario.module.css";

function Formulario() {
  return (
    <form>
      <label>Seu nome:</label>
      <input className={styles.styleInput} />
      <label>E-mail</label>
      <input className={styles.styleInput} />
      <label>CPF:</label>
      <input className={styles.styleInput} />
      <div className={styles.styleRadio}>
        <input type="radio" id="men" name="masculino" value="masculino" />
        <label htmlFor="masculino">Masculino</label>
        <input type="radio" id="woman" name="feminino" value="feminino" />
        <label htmlFor="feminino">Feminino</label>
      </div>
      <button className={styles.btnForm}>Enviar</button>
    </form>
  );
}

export default Formulario;
