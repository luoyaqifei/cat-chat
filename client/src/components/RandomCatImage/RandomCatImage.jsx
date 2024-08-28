import { useEffect, useState } from "react";
import axios from "axios";
import "./RandomCatImage.scss"
;
export default function RandomCatImage() {
    const [catImage, setCatImage] = useState(null);
    async function getRandomCatImgUrl() {
        try {
            const {data} = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=live_5WKgQfi4GKZjEb3ey3r2CEEdvQzEQEaARFhJdC2eoJrpqIsXTssCjsj2QAOLBntF`);
            setCatImage(data?.[0].url);
        }
        catch (e) {
            console.log("No cats captured!");
        }
    }
    useEffect(() => {
        getRandomCatImgUrl();
    }, []);

    if (catImage) {
        return (
            <div className="random-cat">
                <img src={catImage} className="random-cat__image" onClick={getRandomCatImgUrl}></img>
                </div>
        );
    }
    else {
        return <div>Cat image loading....</div>;
    }

}