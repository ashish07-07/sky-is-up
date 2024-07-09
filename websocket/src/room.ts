import { WebSocket } from "ws";

export class chatroom {
  private rooms: [{}] = [{}];

  createRoom(socket: WebSocket) {
    this.rooms.push(socket);
    console.log(this.rooms);
  }
}
