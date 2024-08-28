import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ChannelPanel.scss";

export default function Channels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => { 
    const fetchChannels = async () => {
      const response = await axios.get("http://localhost:3000/channels");
      setChannels(response.data);
    } 

    fetchChannels(); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const createChannel = async () => {
      const pckg = { name: e.target.channelName.value } 
      const response = await axios.post("http://localhost:3000/channels", pckg);
      setChannels(channels.concat(response.data));
      e.target.reset();
    }

    createChannel();
  }

  const channelElements = channels.map((channel) => {
    return (
      <li className="channels__item" key={channel.id}>
        <Link to={"/chat/" + channel.id}>{channel.name}</Link>
      </li>
    );
  });


  return (
    <div className="channels">
      <h2>Channels</h2>
      <ul className="channels__list">{channelElements}</ul>

      <form className="new-channel" onSubmit={handleSubmit}>
        <input name="channelName" type="text" placeholder="New channel name" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
