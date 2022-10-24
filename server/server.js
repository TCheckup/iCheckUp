const express = require("express"); 
const { Server } = require('socket.io');
const cors = require('cors'); 
const http = require('http');
const mongoose = require('mongoose'); 
const SignUpModel = require('./model/schema/SignUpSchema');

// route import 
const SignUpRoute = require('./routes/iCheckUpRoutes'); 

const app = express(); 


const server = http.createServer(app); 

// middlewares 
app.use(express.json()); 
app.use(cors({
    origin: '*'
}))

// db URI and keys
const keys = require('./model/helper/keys');
const iCheckUpDB = `mongodb+srv://${keys.username}:${keys.password}@cluster0.rfohqbn.mongodb.net/iCheckUpDB?retryWrites=true&w=majority`;

// database connection
mongoose.connect(iCheckUpDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {   
        console.log("====== Connected to iCheckUp database Mongo ===== "); 
    })
    .catch((err) => { 
        console.log(err); 
    })


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000/', 
        methods: ["GET", "POST"],
    }
})

app.get("/home", (req, res) => {
    res.json({username: "darius", password: "12345"});
})

io.on("connection", socket => {
    console.log(`User connected: ${socket.id}`) 
    
    socket.on("sign-up-account", (formDataSignUp) => {
        
        // send data to database  
        const signUpData = new SignUpModel ({ 
            firstName: formDataSignUp.firstName,
            lastName: formDataSignUp.lastName,
            age: formDataSignUp.age,
            email: formDataSignUp.email,
            password: formDataSignUp.password
        })
    
        signUpData.save()
            .then(res => 
                socket.emit('response-sign-in', true)
            ) 
            .catch(err => console.log(err)) 
    })

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`) 

    })
})

// middle wares 
app.use("auth", SignUpRoute);

const PORT = process.env.PORT || 4000; 

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})