import ForwardForm from "./Forward/ForwardForm";
import { AppBar, createTheme, IconButton, Toolbar, ThemeProvider, Box, Typography } from "@mui/material";
import LoginForm from "./Login/LoginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  var content;
  //var session = await getServerSession(authOptions);
  const userIsLoggedIn = true;//session?.user?.email != null;
  if (userIsLoggedIn){
    content = <ForwardForm></ForwardForm>
  } else {
    content = <LoginForm></LoginForm>
  }

  return (
    <>
      <Box className="w-full flex justify-left bg-blue-200 border-b shadow-md">
          <Typography variant="h3">
            ExampleCo
          </Typography>
      </Box>
      <Box className="p-1 flex justify-center">
        {content}
      </Box>
      </>
  );
}
