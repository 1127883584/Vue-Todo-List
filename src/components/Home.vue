<template>
  <Row class="row-home">
    <div class="row-home-header">
      <div class="div-back"><Button type="primary" @click="openBackModal">Back</Button></div>
      <div class="div-username">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" class="row-home-header-avatar"/>
        <span class="row-home-header-span">{{$store.state.username}}</span>
      </div>
    </div>
    <Col span="4" class="row-col">
      <Menu class="home-left-menu" @on-select="selectMenuItem" active-name="list">
        <MenuItem name="list" class="menu-item-list">TodoList列表</MenuItem>
        <MenuItem name="mine" class="menu-item-mine">我的</MenuItem>
      </Menu>
    </Col>
    <Col span="20">
      <router-view></router-view>
    </Col>
    <Modal
            v-model="confirmModel"
            @on-ok="back">
      <p class="modal-body-p">Do you want to go back to the previous component?</p>
    </Modal>
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
    },
    openBackModal() {
      this.confirmModel = true;
    },
    back() {
      this.$router.push({name: 'main'});
    }
  },
  mounted() {
    this.$router.push({name: 'list', params: this.$route.params})
  }
}
</script>

<style scoped>

</style>
