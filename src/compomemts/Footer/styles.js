import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginTop: '12%',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textDecoration: 'none',
    padding: '2px',
    color: 'black',
  },
  image: {
    marginTop: '5px',
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: '15px',
    },
  },
}));
