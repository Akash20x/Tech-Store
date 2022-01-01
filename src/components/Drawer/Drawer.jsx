import React,{ useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const useStyles = makeStyles({
  drawer:{
    width:'200px'
  },
  myLink:{
    textDecoration:'none'
  }
});

const TemporaryDrawer=({mobileOpen,handleDrawerToggle,fetchProductByCategory}) =>{

  const classes = useStyles();

  const refreshPage = ()=>{
    setTimeout(function() {
      window.location.reload();
    }, 1000);
 }


  return(
      <Drawer variant="temporary" 
      anchor="left" 
      open={mobileOpen}
      onClick={handleDrawerToggle}
      className={classes.drawer}>
        <List>
          <Link to = "/" className={classes.myLink}>
            <ListItem>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText secondary={'Home'}/>
            </ListItem>
          </Link>
          <Link to = "/category" className={classes.myLink}>
            <ListItem button onClick={() => fetchProductByCategory('phone')} >
              <ListItemIcon>
                <SmartphoneIcon/>
              </ListItemIcon>
              <ListItemText secondary={'Mobiles'}/>
            </ListItem>
          </Link>
        </List>
      </Drawer>
  );
}

export default TemporaryDrawer;
