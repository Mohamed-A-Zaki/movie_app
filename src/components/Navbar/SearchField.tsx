import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";

import { useAppDispatch } from "../../store/hooks";
import { getMovies, search } from "../../store/moviesSlice";

const SearchField = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      dispatch(search(e.target.value));
    } else {
      dispatch(getMovies(1));
    }
  };

  const renderAdornment = () => {
    return (
      <InputAdornment position="start">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <TextField
      type="search"
      variant="standard"
      placeholder="بحث"
      sx={{ flex: 1, bgcolor: "#fff", borderRadius: 6, py: 0.5, px: 2 }}
      InputProps={{
        disableUnderline: true,
        endAdornment: renderAdornment(),
      }}
      onChange={handleSearch}
    />
  );
};

export default SearchField;
