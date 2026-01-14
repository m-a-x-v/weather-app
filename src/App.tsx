import { useState } from "react";
import { Button, TextField, Stack, Typography, Box } from "@mui/material";
import { useForecast } from "./hooks/useForecast";

function App() {
  const [city, setCity] = useState("");
  const { data, loading, error, loadByCity, loadByGeolocation } =
    useForecast();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" textAlign="center">
          Weather Forecast
        </Typography>

        <Button variant="contained" onClick={loadByGeolocation}>
          Use my location
        </Button>

        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button
          variant="outlined"
          onClick={() => loadByCity(city)}
          disabled={!city}
        >
          Search
        </Button>

        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {data && (
          <Typography variant="body2">
            Loaded forecast for {data.city.name}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export default App;
