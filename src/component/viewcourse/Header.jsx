import React, { useContext, useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/images/Vector.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const myContext = useContext(AppContext);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    myContext.setIsClickedonMenuBar(!(myContext.isClickedOnMenu));
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const handleMenuItemClick = (course) => {
    if (course === "HTML") {
      myContext.setIsClickedOnHtmlCourse(true);
      myContext.setIsClickedOnCssCourse(false);
      myContext.setIsClickedOnReactCourse(false);
    }
    if (course === "CSS") {
      myContext.setIsClickedOnHtmlCourse(false);
      myContext.setIsClickedOnCssCourse(true);
      myContext.setIsClickedOnReactCourse(false);
    }
    if (course === "ReactJS") {
      myContext.setIsClickedOnHtmlCourse(false);
      myContext.setIsClickedOnCssCourse(false);
      myContext.setIsClickedOnReactCourse(true);
    }
    // handleClose();
  };

  return (
    <AppBar sx={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} alt="logo" />
          {isSmallScreen ? (
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              color="primary"
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <MenuRoundedIcon
                sx={{
                  fontSize: "40px",
                  color: "#14C38E",
                }}
              />
            </IconButton>
          ) : (
            <div>
              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="home-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Home
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="courses-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
              >
                Courses
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="teachers-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Teachers
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="events-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Events
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="contact-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Contact
              </Button>
            </div>
          )}
          <Menu
            id="menu"
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={handleClose}
            sx={{ width: "50%" }}
          >
            <Link style={{textDecoration: "none", color:"black"}} to="/">
              <MenuItem onClick={() => handleMenuItemClick("HTML")}>
                HTML
              </MenuItem>
            </Link>
            <Link to="/css-introduction" style={{textDecoration: "none", color:"black"}}>
              <MenuItem onClick={() => handleMenuItemClick("CSS")}>
                CSS
              </MenuItem>
            </Link>
            <MenuItem onClick={() => handleMenuItemClick("JS")}>
              JAVA SCRIPT
            </MenuItem>
            <Link to="/getting-started" style={{textDecoration: "none", color:"black"}}>
              <MenuItem onClick={() => handleMenuItemClick("ReactJS")}>
                REACT JS
              </MenuItem>
            </Link>
            <MenuItem onClick={() => handleMenuItemClick("DB")}>
              DATA BASE
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Cloud")}>
              CLOUD
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
