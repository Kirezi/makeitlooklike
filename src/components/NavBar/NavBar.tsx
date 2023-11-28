"use client";

import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function NavBar() {
  const pathName = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <AppBar position='static' color='transparent'>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton size='large' aria-label='menu' edge='start' sx={{}}>
            <Image
              src='/netflix.svg'
              alt='Next.js Logo'
              width={200}
              height={50}
            />
          </IconButton>

          <Button color='inherit'>
            {pathName?.channel ? pathName?.channel : "Home"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
