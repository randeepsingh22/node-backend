const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb://localhost/randeep";
const socket = require("socket.io");
// mongoose.connect(url,{useNewUrlParser:true});
// const conn = mongoose.connection;


// app.use(express.json());

// const router = require("./routers");
// app.use("/users",router);


// conn.on("open",()=>{
//     console.log("Connected");
// })

const server= app.listen(4000,()=>{
    console.log("Server Started Successfully")
});

const io = socket(server);

io.on('connection',(socket)=>{

 
    console.log("Connected with Socket you id ",socket.id);
    
    socket.on('disconnect',(socketData)=>{
        // var onlineStatus = {
        //     online: false
        // };
        // socketData.broadcast.emit("disconnect",onlineStatus)
        
        console.log("Disconnected",socket.id);
    });

    socket.on('message',(data)=>{
        console.log(data);
        socket.broadcast.emit("message-receive",data);
    })
});





