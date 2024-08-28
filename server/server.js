import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from 'cors';
const app = express(); 

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
});

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
} );

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
} );

server.listen(3000, function () {
    console.log('listening on port 3000');
} )