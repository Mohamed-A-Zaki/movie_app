import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/HomePage";
import MovieDetails from "./Pages/MovieDetails/MovieDetailsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;
