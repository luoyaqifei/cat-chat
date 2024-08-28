import "./Header.scss";
import CatFace from "../CatFace/CatFace";
import { Link, useNavigate, useNavigation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <Link to="/"><CatFace/></Link>
            
        </div>
    );
}