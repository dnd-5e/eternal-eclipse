import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Popper,
  useMediaQuery,
  Divider,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/pics/placeholders/imgPlaceholder.png";
import { NavLink } from "react-router-dom";
import { Left, MapItem, Right } from "../assets/components/menu";
import { useTheme } from "@mui/material/styles";
/** Variables */
const pages = ["/eternal-eclipse/dev/"];
const brandname = "Eternal Eclipse";
/** */
const Navigation = () => {
  /** */
  const [navMenu, setNavMenu] = React.useState(null);
  const [navSubMenu, setNavSubMenu] = React.useState(null);
  const [navSubMenuLowest, setNavSubMenuLowest] = React.useState(null);
  const medium = useMediaQuery(useTheme().breakpoints.up("md"));
  /** */
  const [menu, setMenu] = React.useState(null);
  /** */
  React.useEffect(() => {
    setTimeout(1);
    setMenu(null);
    setNavMenu(null);
    setNavSubMenu(null);
    setNavSubMenuLowest(null);
  }, [medium]);
  /** */
  return (
    <>
      <AppBar position="static" className="navigation">
        {/** */}

        <Toolbar className="navigation">
          <ClickAwayListener
            onClickAway={() => {
              setMenu(null);
              setNavMenu(null);
              setNavSubMenu(null);
              setNavSubMenuLowest(null);
            }}
          >
            <IconButton
              sx={{ flexGrow: 1 }}
              className="navigation brand"
              component={NavLink}
              to={pages + ""}
              onClick={() => {
                setMenu(null);
                setNavMenu(null);
                setNavSubMenu(null);
                setNavSubMenuLowest(null);
              }}
            >
              <img src={logo} alt="Brand logo" className="appbar-brand" />
              <Typography component="h1" className="h1" sx={{ flexGrow: 1 }}>
                {brandname}
              </Typography>
            </IconButton>
          </ClickAwayListener>
          <MapItem
            name="left"
            Map={Left}
            pages={pages}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navSubMenu={navSubMenu}
            setNavSubMenu={setNavSubMenu}
            navSubMenuLowest={navSubMenuLowest}
            setNavSubMenuLowest={setNavSubMenuLowest}
            show={useMediaQuery(useTheme().breakpoints.up("md"))}
            menu={false}
          />
          <hr className="mediator" />
          <MapItem
            name="right"
            Map={Right}
            pages={pages}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navSubMenu={navSubMenu}
            setNavSubMenu={setNavSubMenu}
            navSubMenuLowest={navSubMenuLowest}
            setNavSubMenuLowest={setNavSubMenuLowest}
            show={useMediaQuery(useTheme().breakpoints.up("md"))}
            menu={false}
          />
          <Button
            aria-describedby={"menu"}
            sx={{ display: { xs: "flex", md: "none" } }}
            onMouseEnter={(event) => {
              setNavMenu(null);
              setNavSubMenu(null);
              setNavSubMenuLowest(null);
              setMenu(event.currentTarget);
            }}
          >
            <Typography variant="h4" className="h1">
              menu
            </Typography>
          </Button>
          <Popper
            placement={"bottom-end"}
            sx={{ display: { xs: "flex", md: "none" } }}
            className="menu"
            anchorEl={menu}
            open={Boolean(menu)}
            id="menu"
          >
            <Paper className="menu">
              <MapItem
                name="left"
                Map={Left}
                pages={pages}
                navMenu={navMenu}
                setNavMenu={setNavMenu}
                navSubMenu={navSubMenu}
                setNavSubMenu={setNavSubMenu}
                navSubMenuLowest={navSubMenuLowest}
                setNavSubMenuLowest={setNavSubMenuLowest}
                show={useMediaQuery(useTheme().breakpoints.down("md"))}
                menu={true}
              />
              <Divider />
              <MapItem
                name="right"
                Map={Right}
                pages={pages}
                navMenu={navMenu}
                setNavMenu={setNavMenu}
                navSubMenu={navSubMenu}
                setNavSubMenu={setNavSubMenu}
                navSubMenuLowest={navSubMenuLowest}
                setNavSubMenuLowest={setNavSubMenuLowest}
                show={useMediaQuery(useTheme().breakpoints.down("md"))}
                menu={true}
              />
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  );
};
/** */
export default Navigation;
