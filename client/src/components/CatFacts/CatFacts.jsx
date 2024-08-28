import axios from "axios";
import { useEffect, useState } from "react";
import "./CatFacts.scss";

export default function CatFacts() { 
    const [catFacts, setCatFacts] = useState(null);
    
    async function getCatFacts() {
        try {
            const {data} = await axios.get("https://catfact.ninja/fact");
            setCatFacts(data.fact);
        } catch (error) {
            console.log(error,"request for cat fact unsuccessful.")
        }
    }
    
    useEffect(() => {
        getCatFacts();
    }, []);

    if (catFacts == null) {
        return (<p>Cat fact is loading ...</p>);
    } else {
    return (
        <div className="cat-facts">
            <h2 className="cat-facts__title">Cat Fun Fact</h2>
            <div className="cat-facts__content" onClick={getCatFacts}>{catFacts}</div>
        </div>
    );
}
}