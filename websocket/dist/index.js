"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", function (ws) {
    console.log(`a client connected to me here `);
    ws.on("message", function () {
        console.log("a message in sent from client  from client to a server ");
    });
});
server.listen(8080, function () {
    console.log(`server listening on port 8000`);
});
