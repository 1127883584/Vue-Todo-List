<template>
    <div class="main-div">
        <Input placeholder="please input your name" :autofocus="true" class="main-div-input" v-model="username" @on-enter="enterList"/>
        <Button type="primary" @click="enterList">start use</Button>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                username: ''
            }
        },
        methods: {
            enterList(){
                this.$router.push({name: 'home', params: {username: this.username}});
                this.$store.commit('updateUserName', this.username);
            }
        }
    }
</script>

<style scoped>

</style>