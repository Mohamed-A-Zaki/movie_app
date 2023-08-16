import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
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
    />
  );
};

export default SearchField;
