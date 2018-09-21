<template>
	<div style="float: right; margin-top: -82px;">
		<div class="conversation">
			{{ title }} 
			<!-- /*<MessageFeed ></MessageFeed>
			<MessageComposer @send="sendMessage" ></MessageComposer> */ -->
		</div>
		<div v-for="message in messages" ><p>{{ message.message }}</p></div>
		<div v-for="unread in unreadmessages" ><p>{{ unread.message }}</p></div>
		<textarea v-model="newMessage" placeholde="message.."></textarea>
		<button v-on:click = "sendMessage">Send</button>
	</div>
</template>
<script>
import MessageFeed from './MessageFeed';
import MessageComposer from './MessageComposer';

export default {
	components: { MessageFeed,MessageComposer },
	props :{
		contact : {
			type: Object,
			default: null
		},
	  	userId: {
	   		type: Number,
	   		default: null
	  	},
	  	messages : {
			type: Array,
			default: null
		},
		unreadmessages : {
			type: Array,
			default: null
		},
	},
	data() {
		return {
			title: "Start Chatting",
			newMessage: '',
			receiver_id: ''
		}
	},
	methods: {
		sendMessage() {
            let app  = this;
            let receiver_id = app.$route.params.id;
            let newMessage = app.newMessage;
			if(newMessage == '' && receiver_id == ''){
				return;
			}
            axios.post('/sendMessage',  {receiver_id: receiver_id, message: newMessage}) 
                .then(response => {
                    console.log(response);
                    this.fetchMessage();                        
                })
                .catch(error => {
                    console.log('Error Found')
                })
        }
    }
}

</script>