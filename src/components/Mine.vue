<template>
    <div>
        <div class="div-header">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="div-header-avatar" />
        </div>
        <div class="div-body-mine">
            <div class="div-body-mine-username">Username: {{$store.state.username}}</div>
            <div class="div-body-mine-phone">Phone: 13192654125</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabGroup',
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>