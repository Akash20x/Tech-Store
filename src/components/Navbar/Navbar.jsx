import React, { useState ,useRef} from 'react';
import { AppBar, Toolbar, IconButton, Badge,Grid, Switch, MenuItem, Menu,InputBase, Typography, responsiveFontSizes } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from '../Drawer/Drawer';
import { Tooltip } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CancelIcon from "@material-ui/icons/Cancel";
import PopUp from "../PopUp/PopUp";

import WbSunnyOutlinedIcon   from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';


import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';


const PrimarySearchAppBar = ({ products,totalItems,fetchProductByCategory,darkMode, handleDarkMode}) => {
  const classes = useStyles();
  const location = useLocation();

  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >


      {!(location.pathname === "/cart") && (
        <MenuItem
        component={Link}
            to="/cart"
            onClick={handleMenuClose}>
          <IconButton
            // edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>My Cart</p>
        </MenuItem>
      )}

    </Menu>
  );


  const handleDisplayPopUp = (e) => {
    setDisplayPopUp(true);
    setSearchTerm(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setDisplayPopUp(false);
      setSearchTerm("");
    }
  };

  const handleProductClick = (e) => {
    setDisplayPopUp(false);
    setSearchTerm("");
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
        <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
     
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={logo} alt="logo" height="25px" />
            <span className={classes.image}>
            Tech Store
            </span>
          </Typography>
      
              <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleDisplayPopUp}
              onKeyDown={handleKeyPress}
              value={searchTerm}
            />
          </div>
          {displayPopUp && (
            <div className={classes.closeIcon}>
              <IconButton onClick={handleProductClick}>
                <CancelIcon />
              </IconButton>
            </div>
          )}

          <div className={classes.grow} />
          <Typography variant="body2" component="div" style={{alignItems: 'center'}} >
                <Grid component="label" container alignItems="center" >
                  <Grid item>
                    <WbSunnyOutlinedIcon
                     style={{ fontSize: darkMode ? '15' : '25' }} 
                     color={darkMode ? 'disabled' : 'primary'} /></Grid>
                  <Grid item>
                  <Switch
                    defaultChecked
                    color="default"
                    checked={darkMode}
                    onChange={handleDarkMode}
                  />
                  </Grid>
                  <Grid item>
                    <NightsStayOutlinedIcon 
                    style={{ fontSize: darkMode ? '25' : 15 }}
                    color={darkMode ? 'secondary' : 'disabled'}
                    />
                    </Grid>
                </Grid>
               </Typography>

               <div className={classes.sectionDesktop}>
           
    

            {!(location.pathname === "/cart") && (
              <Tooltip title="Your cart">
                <IconButton
                  // edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  component={Link}
                  to="/cart"
                >
                  <Badge badgeContent={totalItems} color="error" className={classes.menuCartIcon}>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}

          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

         
        </Toolbar>
      </AppBar>
      <TemporaryDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} fetchProductByCategory={fetchProductByCategory} />
      {displayPopUp && (
        <PopUp
          searchTerm={searchTerm}
          products={products}
          handleProductClick={handleProductClick}
        />
      )}
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default PrimarySearchAppBar;
