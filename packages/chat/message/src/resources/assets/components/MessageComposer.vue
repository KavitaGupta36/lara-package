<template>
<div class="composer">
	<textarea v-model="message" @keydown.enter ="send" placeholde="message.."></textarea>
</div>
</template>
<script>
export default {
	props: {
	  userId: {
	   	type: Number,
	  }
	},
	data() {
		return {
			message: ''
		};
	},
	methods : {
		send(){
			if(this.message == ''){
				return;
			}
			this.$emit('send',this.message);
			this.message = ''; 
		}
	},
	mounted() {
		console.log("Hello Composer")
	}
}
</script>