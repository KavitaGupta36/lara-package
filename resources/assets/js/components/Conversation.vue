<template>
	<div style="float: right; margin-top: -82px;">
		<div class="conversation">
			{{ title }} 
			<!-- /*<MessageFeed ></MessageFeed>
			<MessageComposer @send="sendMessage" ></MessageComposer> */ -->
		</div>
		<div v-for="message in messages" ><p>{{ message.message }}</p></div>
		<div v-for="unread in unreadmessages" ><p>{{ unread.message }}</p></div>
		<div>{{ newRecievedMessage }}</div>
		<input v-model="newMessage" placeholder="message..">
		<!-- <textarea v-model="newMessage" placeholde="message.."></textarea> -->
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
		}
	},
	data() {
		return {
			title: "Start Chatting",
			newMessage: '',
			receiver_id: '',
			newRecievedMessage: ''
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
                    console.log(app.newMessage);
                    app.newMessage = ''; 

                    Pusher.logToConsole = true;
                	var pusher = new Pusher('f4e14530aedbfaf9a062', {
                	  cluster: 'ap2',
                	  forceTLS: true
                	});

                	var channel = pusher.subscribe('my-channel'); 
        	    	channel.bind_global('my-event', function(data) {
        	    		app.newRecievedMessage = JSON.stringify(data.message);
        	    		//app.warningsContainer.push(message);
        	    	});                    
                })
                .catch(error => {
                	app.newMessage = '';
                    console.log('Error Found')
                })
        }
    }/*,
    mounted(){
    	console.log("Hello");
    	Pusher.logToConsole = true;
    	var pusher = new Pusher('f4e14530aedbfaf9a062', {
    	  cluster: 'ap2',
    	  forceTLS: true
    	});

    	var channel = pusher.subscribe('my-channel');
    	channel.bind('my-event', function(data) {
    		console.log("Hello");
    	  console.log(JSON.stringify(data.data.message.message));
    	  alert(JSON.stringify(data.data.message.message));
    	});
    }*/
}

</script>