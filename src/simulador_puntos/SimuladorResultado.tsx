import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";

interface SimuladorResultadoProps {
  resultado: {
    mi_promedio_ponderado: number;
    esperado_exani_ponderado: number;
    esperado_exani: number;
    aciertos_necesarios: number;
  };
  puntos: number;
}

function SimuladorResultado({ resultado, puntos }: SimuladorResultadoProps) {
  return (
    <>
      <Typography component="span">
        Se necesitan <strong>{resultado.aciertos_necesarios} aciertos</strong>{" "}
        para conseguir <strong>{puntos} puntos</strong> entre el exani-ii y el
        promedio.
      </Typography>
      <Divider />
      <Typography component="span">Estructura</Typography>
      <Divider />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              ¿Cómo se estructura el Exani-ii?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Alert severity="info">
              Estos son los reactivos que se condereran para el cálculo del
              exani
            </Alert>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default SimuladorResultado;
