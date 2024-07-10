"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatroom = void 0;
class chatroom {
    constructor() {
        this.rooms = [{}];
    }
    createRoom(socket, roomie) {
        this.rooms.push(socket, roomie);
        console.log(this.rooms);
    }
}
exports.chatroom = chatroom;
