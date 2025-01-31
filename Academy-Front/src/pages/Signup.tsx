import {
  Box,
  Card,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SnackbarAlert from "../components/SnackbarAlert";
import { FormSignup } from "../components/FormSignup";

export function Signup() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Container maxWidth="xs">
        <Card elevation={4} sx={{ p: 4 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <img
                src="https://www.growdev.com.br/assets/images/logo_growdev.svg"
                alt="Logo Growdev"
                width="100"
              />
            </Grid2>

            <Grid2 size={12}>
              <FormSignup />
            </Grid2>

            <Grid2 size={12}>
              <Divider />
            </Grid2>

            <Grid2 size={12} textAlign="center">
              <Typography>
                Já tem uma conta? <Link to="/login">Entre</Link>
              </Typography>
            </Grid2>
          </Grid2>
        </Card>
      </Container>

      <SnackbarAlert />
    </Box>
  );
}
