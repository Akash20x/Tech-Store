import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  root: {
    position: "fixed",
    maxHeight: "50vh",
    zIndex:"3",
    overflowY: "auto",
    marginLeft:"404px",
    [theme.breakpoints.down("sm")]: {
      left : "10vw",
      right : "10vw",
      marginLeft:"auto",
    },
    [theme.breakpoints.up("sm")]: {
        left: "10vw",
    },
  },
}));

export default useStyles;
