import { createHashRouter } from "react-router-dom";
import App from "./App";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";

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
