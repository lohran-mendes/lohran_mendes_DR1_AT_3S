import "./footer.css";

function Footer() {
  return (
    <footer className="FooterComponent" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Marco Madureira</h3>
          <p>Candidato a Prefeito do Rio de Janeiro</p>
          <p className="footer-slogan">Tecnologia e Educação para Todos</p>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <div className="contact-info">
            <p>contato@marcomadureira.com.br</p>
            <p>(21) 99999-9999</p>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
              Facebook
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="social-icon"
              />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Desenvolvido por Lohran Mendes.</p>
      </div>
    </footer>
  );
}

export default Footer;
