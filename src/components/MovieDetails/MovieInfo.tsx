import movie from "../../types/movie.type";
import { Box, Stack, Typography } from "@mui/material";

const MovieInfo = (props: movie) => {
  const {
    original_title,
    release_date,
    vote_count,
    vote_average,
    poster_path,
  } = props;

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      p={3}
      bgcolor={"#eee"}
      borderRadius={2}
    >
      <Box
        component={"img"}
        width={300}
        height={350}
        ml={5}
        borderRadius={2}
        src={`${baseUrl}/${poster_path}`}
      />

      <Stack mt={{ xs: 5, lg: 0 }} spacing={2}>
        <Typography variant="h4">اسم الفيلم : {original_title}</Typography>
        <Typography variant="h4">تاريخ الفيلم : {release_date}</Typography>
        <Typography variant="h4"> عدد المقيمين : {vote_count}</Typography>
        <Typography variant="h4"> التقييم : {vote_average}</Typography>
      </Stack>
    </Stack>
  );
};

export default MovieInfo;
