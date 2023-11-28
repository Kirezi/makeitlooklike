import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";

import SearchForm from "components/SearchForm/searchForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h1'
          fontWeight='700'
          sx={{
            color: "#C6EA8D",
          }}
        >
          Make{" "}
        </Typography>
        <Typography variant='h1' fontWeight='700' color='#FE90AF'>
          It{" "}
        </Typography>
        <Typography variant='h1' fontWeight='700' color='#EA8D8D'>
          Look
        </Typography>
        <Typography variant='h1' fontWeight='700' color='#A890FE'>
          Like{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src='/netflix.svg' alt='Next.js Logo' width={400} height={200} />
      </Box>

      <Box>
        <SearchForm />
      </Box>
    </main>
  );
}
