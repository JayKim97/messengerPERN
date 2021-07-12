import React from 'react'
import { Redirect, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { register, login } from "../../store/utils/thunkCreators";
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
const Form = ({isLogin}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);


  const handleSubmit = (event)=>{
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;    
    if (isLogin){
      dispatch(login({ username, password }))
    } else{
      const email = event.target.email.value;
      dispatch(register({username, email, password}))
    }
  }


  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center">
      <Box className={classes.w_80}>
        <Grid container item className={classes.right}>
          <Typography className={classes.greyText}>{isLogin ? "Don't have an account?" : "Already have an account?"}</Typography>
          {isLogin ? 
            <Button onClick={() => history.push("/register")} className={classes.buttonSwitch}>
              Create a account
            </Button> :
            <Button onClick={() => history.push("/login")} className={classes.buttonSwitch}>
              Login
            </Button>
          }
        </Grid>
        <Typography className={classes.headingText}>{isLogin ? "Welcome back!" : "Create an account."}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid align="center">
            <Grid >
              <FormControl className={classes.w_80}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            { !isLogin ? <Grid>
              <FormControl className={classes.w_80}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid> : null}
            <Grid>
              <FormControl className={classes.w_80}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
              </FormControl>
            </Grid>
            <Button className={classes.buttonSubmit} type="submit" variant="contained" size="large">
              {isLogin ? "Login" : "Create"}
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  )
}

export default Form
