const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;
    // if we already know conversation id, we can save time and just add it to message and return
    // SECURITY WARNING 
    if (conversationId) {
      const conversation = await Conversation.findConversation(senderId, recipientId);
      if (conversation.getDataValue("id") !== conversationId){
        return res.sendStatus(403);
      }
      const message = await Message.create({ senderId, text, conversationId});
      return res.json({ message, sender });
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res)=>{
  try {
    if(!req.user){
      return res.sendStatus(401);
    }
    
    const messages = await Message.update(
      {recipientRead: true},
      {where:{
        conversationId: req.body.conversationId, 
        senderId: req.body.senderId,
        recipientRead: false
      }})
    res.json({messages})
  } catch (error) {
    console.error(error)
  }
})

module.exports = router;
