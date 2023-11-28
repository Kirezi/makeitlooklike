"use client";

import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { YoutubeSearchResult } from "interface/youtube";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type Props = {
  featuredFilm: YoutubeSearchResult;
};

const FeaturedFilms = ({ featuredFilm }: Props) => {
  const releaseDate = new Date(
    featuredFilm?.snippet?.publishedAt
  ).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
  });

  console.log("featuredFilm", featuredFilm);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${featuredFilm?.snippet?.thumbnails?.high?.url})`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to top, #111 40%, transparent 90%)",
          flexShrink: 1,
          paddingLeft: "2rem",
          paddingRight: "5rem",
        }}
      >
        <Typography variant='h4' fontWeight='700' sx={{}}>
          {featuredFilm?.snippet?.title}
        </Typography>

        <List
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItem>{featuredFilm?.snippet?.channelTitle}</ListItem>

          <ListItem>{releaseDate}</ListItem>
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button>
            <PlayArrowIcon />
            Play
          </Button>

          <Button>
            {" "}
            <AddIcon /> My List
          </Button>
        </Box>

        <Typography
          variant='h6'
          fontWeight='700'
          sx={{
            opacity: 0.5,
          }}
        >
          {featuredFilm?.kind}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturedFilms;
