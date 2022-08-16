import "./style.css";
import Menu from "../Menu"

function Header() {
  return (
    <header>
      <p className="header-title">uma seleção de produtos</p>
      <p className="header-focus">especial para você</p>
      <p>
        Todos os produtos desta lista foram selecionado a partir da sua
        navegação. Aproveite!
      </p>
      <Menu/>
    </header>
  );
}

export default Header;
