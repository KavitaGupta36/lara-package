<template>
    <ul class="chat">
        <li class="left clearfix">
            <div class="chat-body clearfix">
                <p>
                   Let's Start Chatting
                </p>
                <form method="post" action="#">
                    <input type="text" name="message" placeholder="Type message..">
                    <input type="hidden" name="sender_id" value="1">
                    <input type="hidden" name="receiver_id" value="2">
                    <button name="send">Send</button>
                </form>
            </div>
        </li>
    </ul>
</template>
