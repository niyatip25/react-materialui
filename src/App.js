// import logo from './logo.svg';
// import './App.css';
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const light = {
    palette: {
      mode: "light",
    },
  };
  const dark = {
    palette: {
      mode: "dark",
    },
  };

  const appliedTheme = createTheme(theme ? light : dark);
  // const appliedTheme = unstable_createMuiStrictModeTheme(theme ? palette.light : palette.dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper>
          <div>
            <Typography variant="h3">Hello!</Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
            <Typography>
              Click on {!theme ? "Sun" : "Moon"} Icon to change to{" "}
              {!theme ? "Light" : "Dark"} theme
            </Typography>
          </div>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
