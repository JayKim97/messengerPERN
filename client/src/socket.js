import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";

const socket = io(window.location.origin, { 
  auth:{ token: "temp"},
  autoConnect: false });

socket.on("connect", () => {
  console.log("connected to server");

});

socket.on("connect_error", () => {
  socket.auth.token = localStorage.getItem("messenger-token");
  socket.connect();
});

socket.on("add-online-user", (id) => {
  store.dispatch(addOnlineUser(id));
});

socket.on("remove-offline-user", (id) => {
  store.dispatch(removeOfflineUser(id));
});
socket.on("new-message", (data) => {
  store.dispatch(setNewMessage(data.message, data.sender));
});

export default socket;
