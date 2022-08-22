import style from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={style.boxNew}>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>

      <form className={style.boxForm}>
        <div className={style.contato}>
          <label>Nome do seu amigo:</label>
          <input className={style.inputNew}></input>
        </div>
        <div className={style.contato}>
          <label>E-mail:</label>
          <input className={style.inputNew}></input>
        </div>
      </form>

      <button className={style.btnNew}>Enviar agora</button>
    </div>
  );
}

export default Newsletter;
