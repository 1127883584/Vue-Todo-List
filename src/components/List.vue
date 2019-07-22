<template>
  <div>
    <Card class="div-card">
      <div class="div-header">
        <div class="div-header-title">
          <h1>Jquery To Do List</h1>
        </div>
        <div class="div-header-comment">
          <h3><i>Simple Todo List with adding and filter by diff status.</i></h3>
        </div>
      </div>
      <div class="div-body">
        <Input type="text" size="large" class="div-body-input" v-model="itemName" @on-enter="addItem"/>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
        <Item :items="itemsByStatus"></Item>
      </div>
      <div class="div-footer">
        <Button size="large" class="div-footer-button" @click="filterItems(1)">All</Button>
        <Button size="large" class="div-footer-button" @click="filterItems(2)">Active</Button>
        <Button size="large" class="div-footer-button-complete" @click="filterItems(3)">Complete</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name: 'List',
  data () {
    return {
      single: false,
      items: [],
      itemsByStatus: [],
      itemName: '',
      tableStatus: 1,
    }
  },
  components: {
    Item: Item
  },
  methods: {
    addItem() {
      if (this.itemName !== '') {
        let item = {
          id: this.$store.state.items.length,
          itemName: this.itemName,
          isSelected: false,
          isEditing: false,
          isShow: true
        };
        this.$store.commit('addItem', item);
        this.itemName = '';
      } else {
        this.$Message.error('Can not add a null item');
      }
    },
    filterItems(status) {
      this.$store.commit('changeShow', status)
    }
  }
}
</script>

<style scoped>

</style>
