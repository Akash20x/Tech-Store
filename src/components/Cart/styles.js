import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '2%',
  },
  emptyButton: {
    minWidth: '150px',
    marginTop:'4%',
    marginBottom:'6%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    marginTop:'4%',
    marginBottom:'6%',
    minWidth: '150px',
    "&:hover": {
      color: "#87CEFA",
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  centerPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  wishlistPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "60vh",
      paddingLeft: "5vh",
      paddingRight: "5vh",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80vw",
      height: "40vh",
    },
    text: {
      marginTop: "5vh",
    },
  },
  pageTitle: {
    marginBottom: "1rem",
  },
  
  loadtext:{
    marginTop:"8rem",
    marginBottom:"5rem"
  }
}));
