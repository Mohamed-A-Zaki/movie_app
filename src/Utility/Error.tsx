import { Alert, Container } from "@mui/material";

const Error = () => {
  return (
    <Container>
      <Alert
        severity="error"
        sx={{ fontSize: 20, my: 3, alignItems: "center" }}
      >
        يوجد خطا ما...
      </Alert>
    </Container>
  );
};

export default Error;
