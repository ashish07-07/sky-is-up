import { WebSocket, WebSocketServer } from "ws";
import http from "http";
import { chatroom } from "./room";
const server = http.createServer();

const wss = new WebSocketServer({ server });

wss.on("connection", function (ws: WebSocket) {
  console.log(`a client connected to me here `);

  ws.on("message", function (data, isBinary) {
    console.log("a message in sent from client to a server ");
    const msg = data.toString();
    console.log(msg);
    console.log(typeof msg);
    const msg1 = JSON.parse(msg);
    if (msg1.type === "room") {
      const room = new chatroom();
      room.createRoom(ws);
    }
  });
});

server.listen(8080, function () {
  console.log(`server listening on port 8000`);
});
