import axios from "axios";
import "./UserRegister.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserRegister({setUser}) {
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();
    //TODO: as part of new-user feature, display username side messages in chat
        //TODO: add an avatar for user

            function handleSubmit(e) {
                e.preventDefault();
                const user = {
                    username: e.target.username.value,
                    email: e.target.email.value
                };
                const addUser = async () => {
                    const {data} = await axios.post("http://localhost:3000/users", user);
                    if (data.existed) {
                        setInfo("You are already a cool cat, just log in!");
                    }
                    else {
                        setInfo(null);
                    }
                    setUser(data);
                    //TODO: have the user in localStorage
                    e.target.reset();
                    navigate("/", {replace: true});
                }
                addUser();
            }
    return (
        <form className="register" onSubmit={handleSubmit}>
            <label className="register__username-label" htmlFor="username">
            <input className="register__username" type="text" name="username" placeholder="please input your user name" required/>
            </label>
            <label className="register__email-label" htmlFor="email">
            <input className="register__email" type="email" name="email" placeholder="please input your email" required/>
            </label>
            <button type="submit" className="register__button">Submit</button>
            <div className="register__info">{info??null}</div>
        </form>
    )
}