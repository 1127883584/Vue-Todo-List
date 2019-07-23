<template>
  <div>
    <Card class="div-card">
      <div class="div-header">
        <TodoTitle></TodoTitle>
      </div>
      <div class="div-body">
        <AddTodo></AddTodo>
        <Item></Item>
      </div>
      <div class="div-footer">
        <TabGroup></TabGroup>
      </div>
    </Card>
  </div>
</template>

<script>
import Item from './Item.vue'
import AddTodo from './AddTodo'
import TabGroup from './TabGroup'
import TodoTitle from './TodoTitle'
export default {
  name: 'List',
  data () {
    return {
      itemName: '',
      tableStatus: 1,
    }
  },
  components: {
    Item: Item,
    AddTodo: AddTodo,
    TabGroup: TabGroup,
    TodoTitle: TodoTitle
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
  },
  mounted() {
    this.$store.dispatch('initItem');
  }
}
</script>

<style scoped>

</style>
