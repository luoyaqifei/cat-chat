import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
import axios from "axios";
import channels from "./routes/channels.js";
const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/channels", channels);

io.on("connection", async (socket) => {
//   const { data } = await axios.get("https://catfact.ninja/fact");
//   socket.broadcast.emit(data);
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("msg" + JSON.stringify(msg))
    io.emit("chat message", msg);
  });
});

server.listen(3000, function () {
  console.log("listening on port 3000");
});
