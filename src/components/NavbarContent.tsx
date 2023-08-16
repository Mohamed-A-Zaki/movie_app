import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.png";
import SearchField from "./SearchField";

const NavbarContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        component={"img"}
        src={logo}
        width={60}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      <SearchField />
    </>
  );
};

export default NavbarContent;
