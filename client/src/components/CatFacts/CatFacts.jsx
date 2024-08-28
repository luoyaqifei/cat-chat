import axios from "axios";
import { useEffect, useState } from "react";
import "./CatFacts.scss";

export default function CatFacts() {
    const [catFacts, setCatFacts] = useState([]);
    async function getCatFacts() {
        const {data} = await axios.get("https://catfact.ninja/fact");
        setCatFacts(data.fact);
    }
    useEffect(() => {
        getCatFacts();
    }, []);
    
    return (
        <div className="cat-facts">
            <h2 className="cat-facts__title">Cat Fun Fact</h2>
            <div className="cat-facts__content" onClick={getCatFacts}>{catFacts}</div>
        </div>
    );
}