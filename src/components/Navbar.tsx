import NavbarContent from "./NavbarContent";
import { AppBar, Container, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: "#b45b35", p: 1, position: "static" }}>
      <Container fixed>
        <Toolbar sx={{ gap: 3, alignItems: "center" }}>
          <NavbarContent />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
