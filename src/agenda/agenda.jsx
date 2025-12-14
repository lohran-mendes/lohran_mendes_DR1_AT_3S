import "./agenda.css";

function Agenda() {
  const events = [
    {
      id: 1,
      date: "15 de Dezembro, 2025",
      time: "14:00",
      title: "Encontro com Educadores",
      description:
        "Discussão sobre implementação de laboratórios de informática nas escolas municipais.",
      location: "Centro Cultural, Centro",
    },
    {
      id: 2,
      date: "18 de Dezembro, 2025",
      time: "10:00",
      title: "Visita às Comunidades",
      description:
        "Apresentação de propostas de internet pública e gratuita para moradores.",
      location: "Complexo do Alemão",
    },
    {
      id: 3,
      date: "20 de Dezembro, 2025",
      time: "16:00",
      title: "Lançamento de Cursos Técnicos",
      description:
        "Inauguração do programa de cursos técnicos gratuitos para jovens da periferia.",
      location: "Zona Oeste",
    },
    {
      id: 4,
      date: "22 de Dezembro, 2025",
      time: "09:00",
      title: "Reunião com Empresas",
      description:
        "Estabelecimento de parcerias de capacitação e inserção no mercado de trabalho.",
      location: "Centro Empresarial",
    },
    {
      id: 5,
      date: "28 de Dezembro, 2025",
      time: "18:00",
      title: "Debate Público",
      description:
        "Evento aberto para debater o futuro da educação e tecnologia no Rio de Janeiro.",
      location: "Praça Mauá",
    },
    {
      id: 6,
      date: "30 de Dezembro, 2025",
      time: "15:00",
      title: "Caminhada pela Educação",
      description:
        "Ato público em defesa da democratização do acesso à tecnologia nas escolas.",
      location: "Copacabana",
    },
  ];

  return (
    <section className="AgendaComponent" id="agenda">
      <h2>Agenda de Campanha</h2>
      <p className="agenda-subtitle">Próximos Eventos de Marco Madureira</p>

      <div className="events-container">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <div className="event-date">
              <span className="date-text">{event.date}</span>
              <span className="time-text">{event.time}</span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <p className="event-location">
                <span className="location-icon"></span>
                {event.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Agenda;
