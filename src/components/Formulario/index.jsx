import "./style.css";

function Formulario() {
  return (
    <form>
      <label>Seu nome:</label>
      <input className="styleInput" />
      <label>E-mail</label>
      <input  className="styleInput" />
      <label>CPF:</label>
      <input className="styleInput" />
      <div className="styleRadio">
        <input type="radio" id="men" name="masculino" value="masculino" />
        <label htmlFor="masculino">Masculino</label>
        <input type="radio" id="woman" name="feminino" value="feminino" />
        <label htmlFor="feminino">Feminino</label>
      </div>
      {/* <button className="button-form">Enviar</button> */}
    </form>
  );
}

export default Formulario;
