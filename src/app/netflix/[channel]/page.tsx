import { Box, Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import Image from "next/image";
import FeaturedFilms from "components/FeaturedFilm/FeaturedFilm";
import { YoutubeSearchResult } from "interface/youtube";
import MovieRow from "components/MovieRow";

const client = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
});

export const getVideos = async (
  searchTerm: string
): Promise<YoutubeSearchResult[]> => {
  const response = await client.get("/search", {
    params: {
      q: searchTerm,
    },
  });

  console.log(response.data.items);
  return response.data.items;
};

type Props = {
  params: {
    channel: string;
  };
};

export default async function page({ params: { channel } }: Props) {
  const youTubeVideo: YoutubeSearchResult[] = await getVideos(channel);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <FeaturedFilms featuredFilm={youTubeVideo[0]} />
      </Box>

      <Typography variant='h5' fontWeight='700' sx={{ paddingLeft: 3 }}>
        Recently Added
      </Typography>

      <Grid container spacing={2}>
        {youTubeVideo?.map((item: any) => (
          <Grid item xs={6} sm={3} key={item?.etag}>
            <MovieRow movie={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
