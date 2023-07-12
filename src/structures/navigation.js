import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
  Link,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/pics/placeholders/imgPlaceholder.png";
import { NavLink } from "react-router-dom";
/** Variables */
const pages = ["/eternal-eclipse/dev/"];
const brandname = "Eternal Eclipse Security Forces - E.E.S.F.";
const left = ["Home", "Ranks", "Characters"];
const right = [];
/** */
const Navigation = () => {
  /** */
  /** */
  const [menu, setMenu] = React.useState(null);
  /** */
  const open = Boolean(menu);
  /** */
  const handleClickMenu = (event) => {
    setMenu(event.currentTarget);
  };
  /** */
  const handleCloseMenu = () => {
    setMenu(null);
  };
  /** */
  return (
    <>
      <AppBar position="static" className="navigation">
        {/** */}
        <Toolbar className="navigation">
          <IconButton
            sx={{ flexGrow: 1 }}
            className="navigation brand"
            component={NavLink}
            to={pages + ""}
          >
            <img src={logo} alt="Brand logo" className="appbar-brand" />
            <Typography component="h1" className="h1" sx={{ flexGrow: 1 }}>
              {brandname}
            </Typography>
          </IconButton>
          {left.map((link, i) => (
            <Link
              to={`${link === "Home" ? pages + "" : pages + link}`}
              sx={{ display: { xs: "none", md: "inline" } }}
              key={"btn-" + link + "-" + i}
              component={NavLink}
              className="h4-h1"
            >
              <Typography variant="h4" className="h1">
                {link}
              </Typography>
            </Link>
            
          ))}
          <hr className="mediator" />
          {right.map((link, i) => (
            <Link
              to={`${link === "Home" ? pages + "" : pages + link}`}
              sx={{ display: { xs: "none", md: "inline" } }}
              key={"btn-" + link + "-" + i}
              component={NavLink}
              className="h4-h1"
            >
              <Typography variant="h4" className="h1">
                {link}
              </Typography>
            </Link>
          ))}
          <Button
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "menu" : undefined}
            onClick={handleClickMenu}
            aria-haspopup="true"
            id="menubtn"
          >
            <Typography variant="h4" className="h1">
              menu
            </Typography>
          </Button>
          <Menu
            MenuListProps={{ "aria-labelledby": "basic-button" }}
            sx={{ display: { xs: "flex", md: "none" } }}
            onClose={handleCloseMenu}
            className="menu"
            anchorEl={menu}
            open={open}
            id="menu"
          >
            {left.map((link, i) => (
              <MenuItem
                to={`${link === "Home" ? pages + "" : pages + link}`}
                key={"menuItem-" + link + "-" + i}
                component={NavLink}
              >
                <Typography variant="h4" className="h1">
                  {link}
                </Typography>
              </MenuItem>
            ))}
            <Divider />
            {right.map((link, i) => (
              <MenuItem
                to={`${link === "Home" ? pages + "" : pages + link}`}
                key={"menuItem-" + link + "-" + i}
                component={NavLink}
              >
                <Typography variant="h4" className="h1">
                  {link}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
/** */
export default Navigation;
