<template>
    <div>
        <div class="div-body-data-table">
            <dl class="div-body-data-table-dl">
                <dt class="div-body-data-table-dl-dt" v-for="(el, index) in $store.state.items.filter(item => item.isShow)" :key="index">
                    <span class="div-body-data-table-dl-dt-del" v-if="el.isSelected">{{index + 1}}. </span>
                    <span v-else>{{index + 1}}. </span>
                    <Checkbox @on-change="changeStatus" v-model="el.isSelected" size="large" class="div-body-data-table-dl-dt-checkbox">
                    </Checkbox>
                    <span v-if="!el.isEditing" @dblclick="editItemName(el)">
                      <del class="div-body-data-table-dl-dt-del" v-if="el.isSelected">{{el.itemName}}</del>
                      <span v-else>{{el.itemName}}</span>
                    </span>
                    <Input v-else v-model="el.itemName" ref="contentInput" :autofocus="el.isEditing" class="div-body-data-table-dl-dt-input" size="small" @on-blur="itemInputOnBlur(el)" @on-enter="itemInputOnBlur(el)"/>
                    <Button class="div-body-data-table-dl-dt-delete-btn" type="error" @click="openModal(el)">delete</Button>
                </dt>
            </dl>
        </div>
        <Modal
                v-model="confirmModel"
                @on-ok="deleteItem">
            <p class="modal-body-p">Do you delete this item?</p>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data () {
            return {
                confirmModel: false,
                delItem: {}
            }
        },
        methods: {
            editItemName(el) {
                this.$store.commit('changeItemIsEditing', {el: el, isEdit: true})
                this.$nextTick(() => {
                    this.$refs.contentInput[0].focus();
                });
            },
            itemInputOnBlur(el) {
                el.isEditing = false
                this.$store.dispatch('updateItem', el);
            },
            changeStatus(){
                this.$nextTick(() => {
                    this.$store.commit('changeShow', this.$store.state.tableStatus)
                })
            },
            openModal(el){
                this.delItem = el
                this.confirmModel = true
            },
            deleteItem(){
                this.$store.dispatch('deleteItem',  this.delItem);
            }
        }
    }
</script>

<style scoped>

</style>
