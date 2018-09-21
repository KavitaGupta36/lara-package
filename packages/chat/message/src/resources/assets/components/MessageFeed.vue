<template>
	<div class= "feed"
		<ul v-if="contact">
			/*<li v-for="message in messages">
				<div class="text">
					{{ message.text }}
				</div>
			</li>*/
		</ul>
	</div>
</template>
<script>
export default {
	props :{
		contact : {
			type: Object,
			default: null
		}/*,
		messages : {
			type: Array,
			default: []
		}*/
	},
	mounted() {
		console.log("Hello Feed");
	}
}
</script>