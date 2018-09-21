<template>
    <div class="chat-form">
        <ContactList :contacts ="contacts" />
    </div>
</template>
<script>
    import ContactList from './ContactList';
    export default {
        components: {
            ContactList
        },
        data() {
            return {
              contacts: []
            }   
        },
        mounted() {
            axios.get('/contacts')
                .then((response) => {
                    this.contacts = response.data;
                })
        },

    }
</script>