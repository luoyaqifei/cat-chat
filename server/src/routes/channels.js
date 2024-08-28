import express from "express";
import fs from "node:fs";
import path from "node:path";
import {v4 as uuidv4} from "uuid";

const router = express.Router();
const __dirname = import.meta.dirname;

router.get("/", (_req,res) => {
    const data = fs.readFileSync(path.join(__dirname, "../../data/db.json"));
    const channels = JSON.parse(data).channels;
    res.json(channels);
})

router.post("/", (req, res) => {
    const channel = req.body;
    channel.id = uuidv4();
    const data = fs.readFileSync(path.join(__dirname, "../../data/db.json"));
    const json = JSON.parse(data);
    const channels = json.channels;
    channels.push(channel);
    fs.writeFileSync(path.join(__dirname, "../../data/db.json"), JSON.stringify(json, null, 4))
    res.send(channel); 
})

export default router;