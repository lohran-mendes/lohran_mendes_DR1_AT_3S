import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function OtherProposals() {
  const otherProposals = [
    "Parcerias com empresas de tecnologia para inserir jovens no mercado",
    "Criação de incubadoras de startups nas comunidades",
    "Programa de bolsas para cursos universitários de tecnologia",
    "Implementação de sistemas digitais na gestão pública",
    "Criação de espaços makers com impressoras 3D e ferramentas digitais",
  ];

  return (
    <Box
      sx={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: { xs: "1.5rem", md: "2rem" },
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          color: "#2a5298",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          fontWeight: 600,
          margin: "0 0 1rem 0",
        }}
      >
        Outras Propostas
      </Typography>
      <List sx={{ margin: 0, padding: 0 }}>
        {otherProposals.map((proposal, index) => (
          <ListItem
            key={index}
            sx={{
              position: "relative",
              padding: "0.75rem 0 0.75rem 2rem",
              borderBottom:
                index < otherProposals.length - 1
                  ? "1px solid #f0f0f0"
                  : "none",
              "&::before": {
                content: '"▸"',
                position: "absolute",
                left: "0.5rem",
                color: "#2a5298",
                fontWeight: "bold",
                fontSize: "1.2rem",
              },
            }}
          >
            <ListItemText
              primary={proposal}
              sx={{
                color: "#333",
                fontSize: "0.95rem",
                lineHeight: 1.5,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default OtherProposals;
