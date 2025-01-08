import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import SimuladorForm from "./SimuladorForm";
import SimuladorResultado from "./SimuladorResultado";
import { useState } from "react";
import Button from "@mui/material/Button";

function SimuladorApp() {
  // Objeto con la configuración del exani para realizar el calculo
  const [config, setConfig] = useState({
    ponderacionExani: 0,
    ponderacionPromedio: 0,
    puntos: 0,
    miPromedio: 0,
  });

  // Objeto los resultados que necesita obtener el solicitante
  const [resultado, setResultado] = useState({
    mi_promedio_ponderado: 0,
    esperado_exani_ponderado: 0,
    esperado_exani: 0,
    aciertos_necesarios: 0,
  });

  const handleClick = () => {
    calcularAciertos();
  };

  // Calcular aciertos necesarios en el exani
  const calcularAciertos = () => {
    // Mi promedio ponderado
    let mi_promedio_ponderado =
      (config.miPromedio * config.ponderacionPromedio) / 10;
    console.log("Mi promedio ponderado: " + mi_promedio_ponderado);

    // Esperado del exani ponderado para llegar a mis puntos objetivo
    let esperado_exani_ponderado = config.puntos - mi_promedio_ponderado;
    console.log(
      "Puntos ponderados que necesito del exani: " + esperado_exani_ponderado
    );

    // Esperado del exani para llegar a mis puntos objetivo
    let esperado_exani =
      (100 * esperado_exani_ponderado) / config.ponderacionExani;
    // Redondeamos a 2 decimales lo que necesita sacar en el exani
    esperado_exani = Number(esperado_exani.toFixed(2));
    console.log("Puntos que necesito del exani (0-100): " + esperado_exani);

    // Aciertos necesarios para llegar a mi puntuacion objetivo
    let aciertos_necesarios = (138 * esperado_exani) / 100;
    // Redondeamos siempre hacia arriba
    aciertos_necesarios = Math.ceil(aciertos_necesarios);

    aciertos_necesarios = Math.ceil(aciertos_necesarios);

    setResultado({
      mi_promedio_ponderado,
      esperado_exani_ponderado,
      esperado_exani,
      aciertos_necesarios,
    });

    console.log(
      "Aciertos necesarios para llegar a " +
        config.puntos +
        " puntos: " +
        aciertos_necesarios
    );
  };

  const onChangeConfig = (name: string, value: number) => {
    setConfig({ ...config, [name]: value });
  };

  return (
    <>
      <Grid container spacing={2} sx={{ pt: 4, marginLeft: 8 }}>
        <Grid offset={{ xs: 0, md: 4 }} size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" component="h1">
            Simulador - Ingreso a la Universidad
          </Typography>
          <Typography variant="subtitle1">
            Calcula el número de aciertos que necesitas en obtener en el EXANI
            II para llegar a la calificación que tienes como objetivo.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ pt: 4, marginLeft: 8, marginRight: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SimuladorForm
            config={config}
            onChangeConfig={onChangeConfig}
          ></SimuladorForm>
          <Button variant="contained" onClick={handleClick}>
            Calcular
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ border: 1, borderColor: "#DDD" }}>
          <SimuladorResultado
            resultado={resultado}
            puntos={config.puntos}
          ></SimuladorResultado>
        </Grid>
      </Grid>
    </>
  );
}

export default SimuladorApp;
