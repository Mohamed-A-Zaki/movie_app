import { Container, Grid } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const MoviesListLayout = ({ children }: Props) => {
  return (
    <Container fixed>
      <Grid container my={3} spacing={3}>
        {children}
      </Grid>
    </Container>
  );
};

export default MoviesListLayout;
