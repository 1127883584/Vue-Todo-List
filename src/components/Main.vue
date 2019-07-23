<template>
    <div class="main-div">
        <Input placeholder="please input your name" class="main-div-input" v-model="username"/>
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
                this.$router.push({name: 'home', params: {username: this.username}})
            }
        }
    }
</script>

<style scoped>

</style>