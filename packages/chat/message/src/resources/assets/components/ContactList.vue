<template>
	<div>
		<div class="contact-list" style="margin-left: 120px;">
			<ul>
				<li v-for="(contact, index) in contacts" :key="contact.id" 
				@click = "selectContact(contact.id, contact)" :class="{ 'selected': index}">
					<router-link :to="{name: 'messages', params: {id: contact.id}}">
						<a href="/#" >{{ contact.id }} - {{ contact.name }}</a>
					</router-link>
				</li>
			</ul>
		</div>
		<Conversation :userId="user_id" :messages="allMessages" :unreadmessages="unreadMessages"/>
	</div>
</template>
<script>
import Conversation from './Conversation'; 
	export default {
		props: {
			contacts: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				selected: 0,
				index: '',
				user_id: 0,
				allMessages: [],
				unreadMessages: []
			}
		},
		components: {
			Conversation
		},
		methods: {
			selectContact(index, contact){
				this.user_id = index;
				this.selected = index;
				axios.get('/conversation/' + index)
				.then(response => {
                    this.allMessages = response.data;
                });
                axios.get('/unreadMessage/' + index)
				.then(response => {
                    this.unreadMessages = response.data;
                });
			}
		}
	}
</script>
