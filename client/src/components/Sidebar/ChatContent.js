import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, Grid } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    letterSpacing: -0.17,
  },

  unreadText: {
    color: "#000000",
    fontWeight: 800
  },
  readText:  {color: "#9CADC8"},

  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  counter:{
    fontSize: "12px",
    background: "#3A8DFF",
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    textAlign:"center",
    margin:"auto 5% auto 0",
    color: "#ffffff"
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;
  const count = conversation.messages.filter(message => (message.senderId === conversation.otherUser.id && !message.recipientRead)).length;
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        {count > 0 ? 
        <Typography className={`${classes.previewText} ${classes.unreadText}`}>
          {latestMessageText}
        </Typography> :
        (<Typography className={`${classes.previewText} ${classes.readText}`}>
          {latestMessageText}
        </Typography>)
        }
        
      </Box>
      {count > 0 ? <Typography className={classes.counter}>{count}</Typography> : null}
    </Box>
  );
};

export default ChatContent;
