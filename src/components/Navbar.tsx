import logo from "../images/logo.png";
import SearchField from "./SearchField";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: "#b45b35", p: 1, position: "static" }}>
      <Container fixed>
        <Toolbar sx={{ gap: 3, alignItems: "center" }}>
          <Box component={"img"} src={logo} width={60}></Box>
          <SearchField />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
