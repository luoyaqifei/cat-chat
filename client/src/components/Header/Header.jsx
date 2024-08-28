import "./Header.scss";
import CatFace from "../CatFace/CatFace";
import { Link, useNavigate, useNavigation } from "react-router-dom";

export default function Header({user}) {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h2>Cat Chat</h2>
            <Link to="/" className="header__logo"><CatFace/></Link>
            <div className="header__username">{user?.username ? `Cat name: ${user.username}`: "You are not a cat yet."}</div>
        </div>
    );
}