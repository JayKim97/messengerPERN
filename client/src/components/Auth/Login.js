import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "../../store/utils/thunkCreators";
import useStyles from './styles';


const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center">
      <Box className={classes.w_80}>
        <Grid container item className={classes.right}>
          <Typography className={classes.greyText}>Don't have an account?</Typography>
          <Button 
            onClick={() => history.push("/register")}
            variant="outlined"
            className={classes.buttonSwitch}>Create account</Button>
        </Grid>
        <Typography className={classes.headingText}>Welcome back!</Typography>
        <form onSubmit={handleLogin}>
          <Grid align="center">
            <Grid>
              <FormControl margin="normal" required  className={classes.w_80} >
                <TextField
                  aria-label="username"
                  label="E-mail address"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required  className={classes.w_80}> 
              <TextField
                label="password"
                aria-label="Password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid align="center">
              <Button type="submit" variant="contained" size="large" className={classes.buttonSubmit}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
