"use client";

import { Box, Button, Card, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface SearchFormProps {
  search: String;
}
export default function SearchForm() {
  const { control, handleSubmit } = useForm<SearchFormProps>({
    defaultValues: {
      search: "",
    },
  });

  const router = useRouter();
  const onSubmit = (data: SearchFormProps) => {
    console.log("search term", data);
    router.push(`/netflix/${data.search}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='search'
          render={({ field: { onChange } }) => (
            <TextField
              fullWidth
              label='YouTube Channel'
              placeholder="please enter a YouTube channel's name"
              variant='outlined'
              onChange={onChange}
            />
          )}
        ></Controller>
        <Button type='submit'>Build</Button>
      </form>
    </>
  );
}
