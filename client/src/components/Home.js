import React, { useEffect,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, CssBaseline } from "@material-ui/core";
import { SidebarContainer } from "./Sidebar";
import { ActiveChat } from "./ActiveChat";
import { logout, fetchConversations } from "../store/utils/thunkCreators";
import { clearOnLogout } from "../store/index";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "97vh",
  },
}));

const Home = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(user.id){
  //     setIsLoggedIn(!isLoggedIn)
  //   }
  //   console.log("EXECUTED IS LOGGED IN ")
  // }, [user.id])

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch])

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn)
    dispatch(logout(user.id));
    dispatch(clearOnLogout())
  };

  const classes = useStyles();
  if (!user.id) {
    // If we were previously logged in, redirect to login instead of register
    if (isLoggedIn) return <Redirect to="/login" />;
    return <Redirect to="/register" />;
  }
  return (
    <>
      {/* logout button will eventually be in a dropdown next to username */}
      {/* <Button className={classes.logout} onClick={this.handleLogout}>
        Logout
      </Button> */}
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <SidebarContainer handleLogout ={handleLogout}/>
        <ActiveChat />
      </Grid>
    </>
  );
}

export default Home;
