import React, { useEffect } from 'react'
import selection from './selection';
import { useSocket } from './SocketProvider'
import sound from "../assets/notification.mp3";

const GetNewMessage = () => {
const {socket}=useSocket();
const {newMessage,setNewMessage}=selection();

useEffect(()=>{
    if(socket){
        socket.on("new_msg",(new_msg)=>{
            const notify=new Audio(sound);
            setNewMessage(new_msg);
            notify.play();
        })
    }
    return ()=>{
        socket.off("new_msg")
    }
},[newMessage]);

}

export default GetNewMessage