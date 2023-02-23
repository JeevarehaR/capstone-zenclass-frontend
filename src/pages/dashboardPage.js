import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Appbar } from "../components/Appbar";
import { DrawerComp } from "../components/DrawerComp";
import { ContentBox } from "../components/ContentBox";

function DashBoard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      <DrawerComp />
      <ContentBox />
    </Box>
  );
}

export default DashBoard;
