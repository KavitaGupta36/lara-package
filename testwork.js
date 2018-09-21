Vue.component('message-component', require('./components/MessageComponent.vue'));
Vue.component('chat-form', require('./components/ChatForm.vue'));

window.messageEvent = new Vue();

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created() {
        this.fetchMessages();
    },

    methods: {
        fetchMessages() {
            axios.get('/message').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
            this.messages.push(message);

            axios.post('/message', message).then(response => {
              console.log(response.data);
            });
        }
    }
});

================

data: {
    messages: []
},

created() {
    this.fetchMessages();
},

methods: {
    fetchMessages() {
        axios.get('/message').then(response => {
        	console.log("dsad")
            this.messages = response.data;
        });
    },

    addMessage(message) {
        this.messages.push(message);

        axios.post('/message', message).then(response => {
          console.log(response.data);
        });
    }
}
=======================ChatForm.Vue=======================
<script>
    export default {
        mounted:function(){
            console.log('hello guys..')
        } 
    }
</script>

================================================
methods: {
    sendMessage() {
        var app  = this;
        var data = app.user;
        axios.post('/sendMessage', data) {
            .then(response => {
                console.log(response)                        
            })
            .catch(error => {
                console.log('Error Found')
            })
        }
    }
    /*sendMessage() {
        this.$emit('messagesent', {
            user: this.user,
            message: this.newMessage
        });

        this.newMessage = ''
    }*/
}
====================================================
<Conversation :contact="selectedContact" :messages="messages" />
selectedContact: null,
<ContactList :contacts="contacts" />

import ContactList from './ContactList';
    export default {
        name : 'contact-list',
        components: {
            'contact-list': ContactList
        }
}
===============================
<input id="btn-input" type="text" name="message" class="form-control input-sm" 
            placeholder="Type your message here..." v-model="user.newMessage">
            <button v-on:click = "sendMessage">Send</button>
            {{ thing }}

======================

sendMessage() {
            var app  = this;
            var data = app.user;
            axios.post('/sendMessage', data) 
                .then(response => {
                    console.log(response);
                    this.fetchMessage();                        
                })
                .catch(error => {
                    console.log('Error Found')
                })
        }




<?php
$a = array('A','B','C');
$b = array('A','C');
foreach($a as $v){ 
  foreach($b as $l){
    if($v == $l) { 
?>
  <option><?php echo $v; echo "hello"; ?></option>
<?php } else { ?>
    <option><?php echo $v; ?></option>
<?php    } } }
?>

<?php
$a = array('A','B','C');
$b = array('A','C');
foreach($a as $v){ 
    foreach($b as $l){
?>
<option><?php echo $v; if($v == $l) {  echo "hello"; } ?></option>
<?php  } }
?>
================================================

axios.get('/message',{user_id : user_id}).then(response => {
                    this.messages = response.data;
                });