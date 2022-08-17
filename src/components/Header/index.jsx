import "./style.css";
import { Menu } from "../Menu";
import { Input } from "../Input";

export function Header() {
  return (
    <header className="header-flex container">
      <p className="header-title">uma seleção de produtos</p>
      <p className="header-focus">especial para você</p>
      <p className="header-p">
        Todos os produtos desta lista foram selecionado a partir da sua
        navegação. Aproveite!
      </p>
      <div className="menu-button">
        <Menu name="Conheça a Linx" />
        <Menu name="Ajude o algorítimo" />
        <Menu name="Seus produtos" />
        <Menu name="Compartilhe" />
      </div>
    </header>
  );
}

export default Header;