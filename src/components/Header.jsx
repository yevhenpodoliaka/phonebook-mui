import { AppBar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import AuthNav from "./AuthNav";

export default function Header(params) {
    return (
      <Container>
        <AppBar position="static">
          <Typography variant="body-1" sx={{ textAlign: 'center' }}>
            Phone Book
          </Typography>
          <AuthNav />
        </AppBar>
      </Container>
    );
};
