'use client'
import { Box, Button, createTheme, Paper, TextField, ThemeProvider, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '48pt',
    },
    h2: {
      fontSize: '30pt',
    },
  },
});

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: username,
      password,
      redirect: true,
      //callbackUrl: "/", // where to go on success
    });}
  return (
    <ThemeProvider theme={theme}>
    <Paper className="w-1/3 bg-gray-50 border overflow-hidden">
      <div className="bg-blue-200 p-1 shadow-md">
        <Typography variant="h1">
          Login
        </Typography>
      </div>
      <Box className="p-1 flex flex-col justify-items-center">
        <p>Sorry friend, you have to log in to experience this demo. If you were directed here but weren't provided login credentials, please speak with Tyson LaFollette.</p>

        <form onSubmit={handleSubmit} className="flex flex-col justify-items-center">
          <TextField id="outlined-basic" label="Username" variant="outlined" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          <Button variant="contained" type="submit">Log In</Button>
        </form>
      </Box>
    </Paper>
    </ThemeProvider>
  );
}
