import { Box, Typography } from "@mui/material";

type Props = {
  overview: string;
};

const MovieStory = ({ overview }: Props) => {
  return (
    <Box p={3} mt={3} bgcolor={"#eee"} borderRadius={2}>
      <Typography variant="h4">القصة</Typography>

      <Typography variant="h6" mt={2}>
        {overview}
      </Typography>
    </Box>
  );
};

export default MovieStory;
