import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Appbar() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      open={setOpen(open)}
      sx={{ backgroundColor: "#f9fbfd" }}
    >
      <Toolbar className="toolbar">
        <Grid container spacing={1}>
          <Grid md="1">
            <Item sx={{ boxShadow: "none" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  marginRight: 5,
                  paddingTop: 2,
                  ...(open && { display: "none" }),
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3p4MfwwZBtNzxmpuWNmWkXiPvrMw60XU0gbk6bONA&s"
                  className="sidebar-logo"
                  alt="logo"
                />
              </IconButton>
            </Item>
          </Grid>
          <Grid md={6}>
            <Item sx={{ boxShadow: "none" }}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ color: "black", textAlign: "left", paddingTop: 2 }}
              >
                Class
              </Typography>
            </Item>
          </Grid>
          <Grid md={5}>
            <Item sx={{ boxShadow: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: " #555a8f",
                  textAlign: "right",
                  marginTop: 2,
                }}
              >
                <Button
                  variant="text"
                  sx={{ textTransform: "none", fontSize: "large" }}
                  onClick={() => navigate("/student/profile")}
                >
                  Profile
                </Button>{" "}
                <Button
                  color="inherit"
                  variant="text"
                  sx={{ textTransform: "none", fontSize: "large" }}
                  onClick={() => navigate("/")}
                >
                  Logout
                </Button>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
