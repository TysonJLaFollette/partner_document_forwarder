'use client';
import ForwardForm from "./Forward/ForwardForm";
import { AppBar, createTheme, IconButton, Toolbar, ThemeProvider, Box } from "@mui/material";

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                ExampleCo
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box className="p-1 flex justify-center">
            <ForwardForm></ForwardForm>
          </Box>
    </ThemeProvider>
  );
}
