<template>
  <Row class="row-home">
    <Col span="4" class="row-col">
      <Menu class="home-left-menu" @on-select="selectMenuItem" active-name="list">
        <MenuItem name="list" class="menu-item-list">TodoList列表</MenuItem>
        <MenuItem name="mine" class="menu-item-mine">我的</MenuItem>
      </Menu>
    </Col>
    <Col span="20">
      <router-view></router-view>
    </Col>
  </Row>
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
      confirmModel: false
    }
  },
  components: {
    Item: Item,
    AddTodo: AddTodo,
    TabGroup: TabGroup,
    TodoTitle: TodoTitle
  },
  methods: {
    selectMenuItem(itemName){
      this.$router.push({name: itemName})
    }
  },
  mounted() {
    this.$router.push({name: 'list', params: this.$route.params})
  }
}
</script>

<style scoped>

</style>
