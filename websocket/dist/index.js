"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const room_1 = require("./room");
const server = http_1.default.createServer();
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", function (ws) {
    console.log(`a client connected to me here `);
    ws.on("message", function (data, isBinary) {
        console.log("a message in sent from client to a server ");
        const msg = data.toString();
        console.log(msg);
        console.log(typeof msg);
        const msg1 = JSON.parse(msg);
        if (msg1.type === "room") {
            const room = new room_1.chatroom();
            room.createRoom(ws);
        }
    });
});
server.listen(8080, function () {
    console.log(`server listening on port 8000`);
});
