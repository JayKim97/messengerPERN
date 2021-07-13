import React from 'react'
import { Grid, Typography, Paper} from "@material-ui/core";
import logo from '../../assets/images/bubble.svg'
import Signup from "./Signup.js";
import Login from "./Login.js";
import useStyles from './styles';

const Auth = ({newUser}) => {
  const classes = useStyles();
  return (
    <Grid container component="main" spacing={0}  className={classes.root}>
        <Grid item md={5} className={classes.applybg}>
          <Paper className={classes.gradients}>
            <Typography className={classes.centerText} variant="h3" align="center" >
              <img src={logo} alt="chat" className={classes.logo}/>
              <br/>
              Converse with anyone 
              <br/>
              with any language
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={7}>
          {newUser ? <Signup/> : <Login/>}
        </Grid>
      </Grid>
  )
}

export default Auth
