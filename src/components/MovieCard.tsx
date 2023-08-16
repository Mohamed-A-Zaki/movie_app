import movie from "../types/movie.type";
import { Card, CardMedia } from "@mui/material";

const MovieCard = ({ poster_path, original_title }: movie) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Card sx={{ borderRadius: 2.5 }}>
      <CardMedia
        component="img"
        height={300}
        image={`${baseUrl}/${poster_path}`}
        alt={original_title}
      />
    </Card>
  );
};

export default MovieCard;
