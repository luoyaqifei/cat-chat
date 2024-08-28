import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ChannelPanel.scss";

export default function Channels() {
  //TODO: change hard-coded sections to have front-end and back-end support? --> host channels in back-end  
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

      {/* TODO: ON FRONT-END ADD FORM FOR USER INPUT */}
      <div className="new-channel">
        <input type="text" placeholder="New channel name" />
        <button>+</button>
      </div>
    </div>
  );
}
