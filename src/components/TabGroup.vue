<template>
    <div>
        <Button size="large" class="div-footer-button" :class="{'button-selected': $store.state.tableStatus === 1}" @click="filterItems(1)">All</Button>
        <Button size="large" class="div-footer-button" :class="{'button-selected': $store.state.tableStatus === 2}" @click="filterItems(2)">Active</Button>
        <Button size="large" class="div-footer-button-complete" :class="{'button-selected': $store.state.tableStatus === 3}" @click="filterItems(3)">Complete</Button>
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
            filterItems(status) {
                this.$store.commit('changeShow', status)
            }
        }
    }
</script>

<style scoped>

</style>