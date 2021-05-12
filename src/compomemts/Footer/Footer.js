import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h5'
          align='center'
        >
          Copyright © 2021 MAG.
        </Typography>
      </div>
    </AppBar>
  );
};

export default Footer;
