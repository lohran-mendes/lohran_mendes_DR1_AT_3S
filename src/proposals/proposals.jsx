import OtherProposals from "./other-proposals/other-proposals";
import "./proposals.css";

function Proposals() {
  const proposalsCards = [
    {
      id: 1,
      title: "Laboratórios de Informática",
      description:
        "Criação de laboratórios de informática equipados em todas as escolas municipais para garantir acesso à tecnologia desde a infância.",
      image: "src/assets/laboratorios_de_informatica.jpeg",
      alt: "Laboratório de informática com computadores",
    },
    {
      id: 2,
      title: "Cursos Técnicos Gratuitos",
      description:
        "Oferta de cursos técnicos de programação, design e tecnologia para jovens da periferia, preparando-os para o mercado de trabalho.",
      image: "src/assets/curso_tecnico_gratuito.webp",
      alt: "Jovens estudando em sala de aula",
    },
    {
      id: 3,
      title: "Internet Pública",
      description:
        "Implementação de internet pública de alta qualidade nas comunidades e praças, democratizando o acesso à informação.",
      image: "src/assets/internet_publica.png",
      alt: "Tecnologia de conexão digital",
    },
    {
      id: 4,
      title: "Capacitação de Professores",
      description:
        "Programas de capacitação digital para professores, garantindo que educadores dominem ferramentas tecnológicas modernas.",
      image: "src/assets/capacitacao_de_professores.jpg",
      alt: "Professor ensinando com tecnologia",
    },
  ];

  return (
    <section className="ProposalsComponent" id="proposals">
      <h2>Propostas para Transformar o Rio</h2>

      <div className="proposals-cards">
        {proposalsCards.map((proposal) => (
          <article key={proposal.id} className="proposal-card">
            <img
              src={proposal.image}
              alt={proposal.alt}
              className="card-icon"
            />
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
          </article>
        ))}
      </div>

      <OtherProposals />
    </section>
  );
}

export default Proposals;
