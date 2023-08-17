import { useNavigate } from "react-router-dom";
import { Box, Button, SxProps, Theme } from "@mui/material";

const Controls = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign={"center"} mt={2}>
      <Button
        variant="contained"
        sx={ButtonStyle}
        onClick={() => navigate("/")}
      >
        العودة الي الصفحة الرئيسية
      </Button>
    </Box>
  );
};

const ButtonStyle: SxProps<Theme> = {
  m: 1,
  bgcolor: "#b45b35",

  "&:hover": {
    bgcolor: "#b45b35",
  },
};

export default Controls;
