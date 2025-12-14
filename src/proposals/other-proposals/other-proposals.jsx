import "./other-proposals.css";

function OtherProposals() {
  const otherProposals = [
    "Parcerias com empresas de tecnologia para inserir jovens no mercado",
    "Criação de incubadoras de startups nas comunidades",
    "Programa de bolsas para cursos universitários de tecnologia",
    "Implementação de sistemas digitais na gestão pública",
    "Criação de espaços makers com impressoras 3D e ferramentas digitais",
  ];

  return (
    <div className="OtherProposalsComponent">
      <h3>Outras Propostas</h3>
      <ul>
        {otherProposals.map((proposal, index) => (
          <li key={index}>{proposal}</li>
        ))}
      </ul>
    </div>
  );
}

export default OtherProposals;
