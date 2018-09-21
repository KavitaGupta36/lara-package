<template>
	<div style="float: right; margin-top: -82px;">
		<div class="conversation">
			{{ title }} 
			<!-- /*<MessageFeed ></MessageFeed>
			<MessageComposer @send="sendMessage" ></MessageComposer> */ -->
		</div>
		<div v-for="message in messages" ><p>{{ message.message }}</p></div>
		<div v-for="unread in unreadmessages" ><p>{{ unread.message }}</p></div>
		<input v-model="newMessage" placeholder="message..">
		<!-- <textarea v-model="newMessage" placeholde="message.."></textarea> -->
		<button v-on:click = "sendMessage">Send</button>
	</div>
</template>
<script>
import MessageFeed from './MessageFeed';
import MessageComposer from './MessageComposer';

import Pusher from 'pusher-js';

export default {
	name:'pusher-events',
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
	props:['api_key','api_cluster', 'channel_data'],
	data() {
		return {
			title: "Start Chatting",
			newMessage: '',
			receiver_id: '',
			pusher: null,
			channel: null
			/*channels:{},
			form:{}*/
		}
	},
	beforeMount(){
	   this.initPusher()
	   this.bindConnections()
	},
	created	() {
		this.pusher = new Pusher(env(PUSHER_APP_KEY), {
			encrypted: true,
			cluster: env(PUSHER_APP_CLUSTER)
		})
		let that = this;
		this.channel = this.pusher.subscriber('my-channel') 
		this.channel.bind('my-event', function(data) {
			that.$emit('my-event',data)
		})
		this.$on('my-event', function(chatMessage){
			this.myEvent(chatMessage)
		})
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
                    console.log("Success");
                    //this.fetchMessage();
                    app.newMessage = '';                        
                })
                .catch(error => {
                	app.newMessage = '';
                    console.log('Error Found')
                })
        }
    },
    mounted(){
    	pusher.bind('my-event', function () {
    		console.log("Hello");
    		
    	});
    }
}

</script>