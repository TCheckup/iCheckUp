const express = require("express"); 
const { Server } = require('socket.io');
const cors = require('cors'); 
const http = require('http');

const app = express(); 

const server = http.createServer(app); 

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000/', 
        methods: ["GET", "POST"]
    }
})

app.get("/home", (req, res) => {
    res.send("gwapo darius");
})

io.on("connection", socket => {
    console.log(`User connected: ${socket.id}`) 
    
    const message =  "sean gwapo and mark gwapo"; 

    socket.emit("send-data", message);

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`) 

    })
})


const PORT = process.env.PORT || 4000; 

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})