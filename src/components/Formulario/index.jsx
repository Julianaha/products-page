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
        <label for="masculino">Masculino</label>
        <input type="radio" id="woman" name="feminino" value="feminino" />
        <label for="feminino">Feminino</label>
      </div>
      <button>Enviar</button>
    </form>
  );
}

export default Formulario;
