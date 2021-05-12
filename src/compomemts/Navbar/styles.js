import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  root: {
    background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px',
  },

  [theme.breakpoints.down('sm')]: {
    appBar: {
      display: 'grid',
    },
    heading: {
      fontSize: '20px',
    },
    profile: {
      fontSize: '10px',
      width: 'auto',
    },
    toolbar: {
      width: 'auto',
    },
    userName: {
      fontSize: '12px',
      margin: '10px',
    },
    purple: {
      fontSize: '12px',
      marginTop: '10px',
    },
  },
}));
