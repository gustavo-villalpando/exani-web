import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";

type SimuladorFormProps = {
  config: {
    ponderacionExani: number;
    ponderacionPromedio: number;
    puntos: number;
    miPromedio: number;
  };
  onChangeConfig: (name: string, value: number) => void;
};

type CustomChangeEvent = React.ChangeEvent<HTMLInputElement>;

function SimuladorForm({ config, onChangeConfig }: SimuladorFormProps) {
  const handleOnChange = (event: CustomChangeEvent) => {
    const { name, value } = event.target;
    onChangeConfig(String(name), Number(value));
  };

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Typography component="h5" sx={{ p: 1 }}>
            Ingresa los porcentajes que asigna la Universidad a la que deseas
            entrar al <strong>Exani-ii</strong> y el <strong>promedio</strong>{" "}
            del Bachillerato
          </Typography>
          <FormControl fullWidth sx={{ m: 1, paddingRight: 2 }}>
            <InputLabel htmlFor="ponderacion-exani"> Exani ii</InputLabel>
            <OutlinedInput
              id="ponderacion-exani"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
              label="exani"
              value={config.ponderacionExani}
              name="ponderacionExani"
              onChange={handleOnChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, paddingRight: 2 }}>
            <InputLabel htmlFor="ponderacion-promedio"> Promedio </InputLabel>
            <OutlinedInput
              id="ponderacion-promedio"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
              label="promedio"
              value={config.ponderacionPromedio}
              name="ponderacionPromedio"
              onChange={handleOnChange}
            />
          </FormControl>
          <Divider sx={{ marginTop: 2, marginBottom: 1 }} />
          <Typography component="h5" sx={{ p: 1 }}>
            Tu promedio (hasta el momento en caso de que aun no salgas)
          </Typography>
          <FormControl fullWidth sx={{ m: 1, paddingRight: 2 }}>
            <InputLabel htmlFor="puntos-esperados"> Mi promedio </InputLabel>
            <OutlinedInput
              id="mi-promedio"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="mi-promedio"
              value={config.miPromedio}
              name="miPromedio"
              onChange={handleOnChange}
            />
          </FormControl>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Typography component="h5" sx={{ p: 1 }}>
            Ingresa los puntos a los que aspiras (Exani-ii + Promedio) del 1 al
            100
          </Typography>
          <FormControl fullWidth sx={{ m: 1, paddingRight: 2 }}>
            <InputLabel htmlFor="puntos-esperados"> Puntos </InputLabel>
            <OutlinedInput
              id="puntos-esperados"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="puntos"
              value={config.puntos}
              name="puntos"
              onChange={handleOnChange}
            />
          </FormControl>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        </div>
      </Box>
    </>
  );
}

export default SimuladorForm;
