import Chatbox from "../../components/Chatbox/Chatbox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Chat({user}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/register", {replace: true});
        }
    }, [user]);
    return (

        //TODO: display more info - user name and who they're talking to, etc. 
        <div className="chat">
            <Chatbox user={user}/>
        </div>
    )
}