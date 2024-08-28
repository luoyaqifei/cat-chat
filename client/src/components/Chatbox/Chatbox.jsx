import React, { useEffect, useState } from "react";
import { useSocket } from "../../hooks/SocketContext";
import { useParams } from "react-router-dom";
import "./Chatbox.scss";
import axios from "axios";


const Chatbox = ({user}) => {
  const { channelId } = useParams();
  const socket = useSocket();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("chat message", async ({channelId: msgChannelId, message: msg, userId}) => {
      if (msgChannelId == channelId) {
        const users = (await axios.get("http://localhost:3000/users")).data;
        setMessages((prevMessages) => [...prevMessages, {msg, username: users.find(i => i.id === userId)?.username}]);
      };
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("chat message");
    };
  }, [socket]);

  function sendMessage(e) {
    e.preventDefault();
    const message = e.target.message.value;
    if (message.trim() !== "") {
      socket.emit("chat message", {channelId, message, userId: user.id});
      e.target.message.value = "";
    }
  }

  return (
    <div className="chatbox">
      <ul className="chatbox__messages">
        {messages.map((msg, index) => (
          <li key={index} className="chatbox__message">
            <h4>{msg.username}</h4>
            <p>{msg.msg}</p>
            </li>
        ))}
      </ul>
      <form className="chatbox__form" onSubmit={sendMessage}>
        <input 
          name="message" 
          className="chatbox__input"
          placeholder="Meow! Your message goes here..."
        />
        <button type="submit" className="chatbox__submit">↩</button>
      </form>
    </div>
  );
};

export default Chatbox;
