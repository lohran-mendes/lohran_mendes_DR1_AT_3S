import "./header.css";

function Header() {
  return (
    <header className="HeaderComponent">
      <h1>Marco Madureira</h1>
      <nav>
        <a href="#about">Biografia</a>
        <a href="#proposals">Propostas</a>
        <a href="#agenda">Agenda</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
