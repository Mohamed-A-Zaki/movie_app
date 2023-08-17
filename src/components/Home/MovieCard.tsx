import movie from "../../types/movie.type";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

const MovieCard = ({ poster_path, original_title, id }: movie) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate();

  return (
    <Card sx={{ borderRadius: 2.5 }}>
      <CardMedia
        component="img"
        height={300}
        sx={{ cursor: "pointer" }}
        image={`${baseUrl}/${poster_path}`}
        alt={original_title}
        onClick={() => navigate(`/${id}`)}
      />
    </Card>
  );
};

export default MovieCard;
