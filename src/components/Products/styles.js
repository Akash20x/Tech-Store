import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  headline:{
    paddingBottom: '2%',
    paddingTop: '2%',
  },
  root: {
    flexGrow: 1,
  },
  chip:{
    marginTop: theme.spacing(-8),
    marginBottom: theme.spacing(3),
  }
}));
