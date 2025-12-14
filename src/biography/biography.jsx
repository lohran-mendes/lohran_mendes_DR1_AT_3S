import "./biography.css";
import imagePerfil from "../assets/marco_madureira_perfil.webp";

function Biography() {
  return (
    <section className="BiographyComponent" id="about">
      <img src={imagePerfil} alt="Marco Madureira - Candidato a Prefeito" />
      <article>
        <p>
          <strong>Marco Madureira</strong> é candidato a prefeito do Rio de
          Janeiro com uma história que inspira transformação. Desde cedo
          apaixonado por tecnologia, fez um curso técnico de informática durante
          o ensino médio que abriu portas para sua carreira.
        </p>
        <p>
          Após concluir o curso técnico, Marco ingressou na faculdade de
          Engenharia de Software, onde aprofundou seus conhecimentos e
          desenvolveu habilidades essenciais para sua trajetória profissional.
        </p>
        <p>
          Hoje, Marco traz essa experiência para a política com uma missão
          clara: democratizar o acesso à educação e à tecnologia no Rio de
          Janeiro. Ele acredita que toda criança merece as mesmas oportunidades
          que ele teve, independente de onde more ou de sua condição social.
        </p>

        <blockquote>
          "A tecnologia mudou minha vida. Agora quero que ela transforme a vida
          de milhares de cariocas"
          <footer>— Marco Madureira</footer>
        </blockquote>
        <p>
          <em>
            Vote consciente. Vote em quem entende que educação e tecnologia são
            o futuro do Rio de Janeiro.
          </em>
        </p>
      </article>
    </section>
  );
}

export default Biography;
