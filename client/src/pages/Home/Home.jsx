import CatFacts from "../../components/CatFacts/CatFacts";
import Channels from "../../components/ChannelPanel/ChannelPanel";
import RandomCatImage from "../../components/RandomCatImage/RandomCatImage";
import "./Home.scss";

export default function Home() {
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