import { Box } from "@mui/material";
import NavLinkButton from "components/NavLinkButton/NavLinkButton";

export default function AuthNav() {
    return (
      <Box>
        <NavLinkButton to="login" text="log in" />
        <NavLinkButton to="register" text=" Sign up" />
      </Box>
    );
    
};

