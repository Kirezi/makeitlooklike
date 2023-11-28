"use client";

import { Box } from "@mui/material";
import { YoutubeSearchResult } from "interface/youtube";
import Image from "next/image";

type Props = {
  movie: YoutubeSearchResult;
};
const MovieRow = ({ movie }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        transform: "scale(0.9)",
        transition: "all 0.5s ease",

        cursor: "pointer",
        "&:hover": {
          transform: "scale(1)",
        },
      }}
    >
      <img src={movie?.snippet?.thumbnails?.medium?.url} alt='movie' />
    </Box>
  );
};

export default MovieRow;
