import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import ".././Style/Headerstyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [openMobile, setMobile] = useState(false);

  const toggleHandeClick = () => {
    setMobile(!openMobile);
  };

  //menu Drow
  const derwer = (
    <Box onClick={toggleHandeClick} sx={{ textAlign: "center", width:'250px' }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1 ,my:3 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>

      <ul className="Mobile-nav-menu">
        <Divider/>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}> About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/Menu"}>Menu</Link>
        </li>
       
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={toggleHandeClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              MyRestaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Divider />
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/About"}> About</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/Menu"}>Menu</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={openMobile}
            onClose={toggleHandeClick}
            sx={{
                display: { xs: "block", sm: "none" },
                "&.MuiDrawer-paper": {
                  boxSizing: 'border-box',
                  width: '290px'
                }
              }}
          >
            {derwer}
          </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;
