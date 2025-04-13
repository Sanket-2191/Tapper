import { createServer } from 'http';
import { Server } from 'socket.io';


import { app } from './src/server.js';
import { connectDB } from './src/db/index.js';

const server = createServer(app);

const io = new Server(
    server,
    {
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        }
    }
);

io.on('connection', (socket) => {
    console.log("socket connection established😊:", socket.id);

    socket.on('new_message', (input) => {
        socket.newMessage = input;
        console.log("new_message: ", input, "from : ", socket.id);
        // let msg = socket.newMessage
        socket.broadcast.emit('load_new_message', input)
    })


})
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log("Server is running.. on port: ", port);
    connectDB();
})