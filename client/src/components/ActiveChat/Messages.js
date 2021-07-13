import {React} from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { lastCheckedMessageId,  messages, otherUser, userId } = props;
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");
        return message.senderId === userId ? (
          lastCheckedMessageId === message.id ? 
            <SenderBubble key={message.id} text={message.text} time={time} imgUrl={otherUser.photoUrl}/>
            : <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      }).reverse()}
    </Box>
  );
};

export default Messages;
