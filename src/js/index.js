import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider, colorsTuple } from "@mantine/core";

import Root from "./root.jsx";
import "@mantine/core/styles.css"

// import Home from "/src/main/js/pages/Home.jsx";
// Colors lifted from cyberdream colorscheme
//
//green : 5af368
//dark grey : 16181a
//purple : 613780
//grey : 666869
//orange : ffbd5e
//lightblue 5ea1ff
//pinkish : b74876

const theme = createTheme({
  colors: {
    'cyber-green': colorsTuple('#5af368'),
    'cyber-dark-grey': colorsTuple('#16181a'),
    'cyber-purple': colorsTuple('#613780'),
    'cyber-grey': colorsTuple('#666869'),
    'cyber-orange': colorsTuple('#ffbd5e'),
    'cyber-blue': colorsTuple('#5ea1ff'),
    'cyber-pink': colorsTuple('#b74876')
  },
});

//const theme = createTheme({});
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Root/>
    </MantineProvider>
  </StrictMode>
);
