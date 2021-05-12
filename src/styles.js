import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  palette: {
    primary: {
      main: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    },
    secondary: {
      main: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    },
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'colum-reverse',
    },
  },
}));
