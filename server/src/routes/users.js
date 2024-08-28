import express from "express";
import fs from "node:fs";
import path from "node:path";
import {v4 as uuidv4} from "uuid";

const router = express.Router();
const __dirname = import.meta.dirname;

router.get("/", (_req,res) => {
    const data = fs.readFileSync(path.join(__dirname, "../../data/db.json"));
    const users = JSON.parse(data).users;
    res.json(users);
})

router.post("/", (req, res) => {
    const user = req.body;
    const data = fs.readFileSync(path.join(__dirname, "../../data/db.json"));
    const json = JSON.parse(data);
    const users = json.users;
    const existedUser = users.find(u => u.email === user.email);
    if (existedUser) {
        res.send({...existedUser, existed: true});
        return;
    }
    user.id = uuidv4();
    users.push(user);
    fs.writeFileSync(path.join(__dirname, "../../data/db.json"), JSON.stringify(json, null, 4))
    res.send(user); 
})

export default router;