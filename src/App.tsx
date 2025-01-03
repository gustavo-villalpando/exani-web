import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SimuladorApp from "./simulador_puntos/SimuladorApp";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <SimuladorApp />
      </Container>
    </>
  );
}

export default App;
