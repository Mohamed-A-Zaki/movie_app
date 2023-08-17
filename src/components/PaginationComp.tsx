import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  Theme,
  SxProps,
} from "@mui/material";

import { setpage } from "../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function PaginationComp() {
  const dispatch = useAppDispatch();
  const {moviesList, page, total_pages } = useAppSelector((state) => state.movies);

  const renderItem = (item: PaginationRenderItemParams) => (
    <PaginationItem
      slots={{ previous: ArrowForwardIosIcon, next: ArrowBackIosIcon }}
      {...item}
    />
  );

  if (moviesList.length === 0) {
    return null;
  }

  return (
    <Pagination
      className="pagination"
      count={total_pages <= 500 ? total_pages : 500}
      shape="rounded"
      sx={PaginationStyle}
      renderItem={renderItem}
      page={page}
      onChange={(_e, value) => dispatch(setpage(value))}
    />
  );
}

const PaginationStyle: SxProps<Theme> = {
  p: 2,
  my: 2,
  display: "flex",
  justifyContent: "center",
};
