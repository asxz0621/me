import React from "react";
export default function chat() {

    return (
        <div id="msonline-chat">

            <h2>chat</h2>
            <div id="chat-window">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <input type="text" id="handle" placeholder="Handle"/>
            <input type="text" id="message" placeholder="Message"/>
            <button id="send">Send</button>
        </div>
    )
}