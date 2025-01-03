import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

function SimuladorApp() {
  return (
    <>
      <Grid container spacing={2} sx={{ pt: 4, marginLeft: 8 }}>
        <Grid offset={{ xs: 0, md: 4 }} size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">
            Simulador - Ingreso a la Universidad
          </Typography>
          <Typography variant="subtitle1">
            {" "}
            Calcula el número de aciertos que necesitas en obtener en el EXANI
            II para llegar a la calificación que tienes como objetivo.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ pt: 4, marginLeft: 8, marginRight: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}></Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ border: 1, borderColor: "#DDD" }}>
          {" "}
        </Grid>
      </Grid>
    </>
  );
}

export default SimuladorApp;
