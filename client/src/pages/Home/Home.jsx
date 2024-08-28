import { useNavigate } from "react-router-dom";
import CatFacts from "../../components/CatFacts/CatFacts";
import Channels from "../../components/ChannelPanel/ChannelPanel";
import RandomCatImage from "../../components/RandomCatImage/RandomCatImage";
import "./Home.scss";
import { useEffect } from "react";

export default function Home({user}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/register", {replace: true});
    }
  }, [user]);
  
  return (
    <div className="home">
      <Channels/>
      <div className="home__right">
      <CatFacts />
      <RandomCatImage/>
      </div>

    </div>
  );
}