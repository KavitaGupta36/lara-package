<template>
    <div class="chat-form">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <ContactList :contacts ="contacts" />
        </div>
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