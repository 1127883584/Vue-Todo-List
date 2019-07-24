<template>
    <div>
        <Input type="text" size="large" :autofocus="true" class="div-body-input" v-model="itemName" @on-enter="addItem"/>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
    </div>
</template>

<script>
    export default {
        name: 'AddTodo',
        data () {
            return {
                itemName: '',
            }
        },
        methods: {
            addItem() {
                let self = this;
                if (this.itemName !== '') {
                    let item = {
                        id: this.$store.state.items.length + 1,
                        itemName: this.itemName,
                        isSelected: false,
                        isEditing: false,
                        isShow: true
                    };
                    this.$store.dispatch('addItem', item).then(() => {
                        self.itemName = '';
                    });
                } else {
                    this.$Message.error('Can not add a null item');
                }
            }
        }
    }
</script>

<style scoped>

</style>
