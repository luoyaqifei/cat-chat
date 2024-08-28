import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ChannelPanel.scss";

export default function Channels() {
  const [channels, setChannels] = useState([{ id: "123", name: "ginger" }]);
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
      <div className="new-channel">
        <input type="text" placeholder="New channel name" />
        <button>+</button>
      </div>
    </div>
  );
}
