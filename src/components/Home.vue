<template>
  <Row>
    <Col span="8">
      <Menu class="home-left-menu">
        <MenuItem name="list" class="menu-item-list">TodoList列表</MenuItem>
        <MenuItem name="mine" class="menu-item-mine">>我的</MenuItem>
      </Menu>
    </Col>
    <Col span="8">

    </Col>
    <Col span="8">

    </Col>
  </Row>
<!--  <div>-->
<!--    -->


<!--    <div class="div-back"><Button type="primary" @click="openBackModal">Back</Button></div>-->
<!--    <div class="div-username"><span>{{$route.params.username}}</span></div>-->
<!--    <Card class="div-card">-->
<!--      <div class="div-header">-->
<!--        <TodoTitle></TodoTitle>-->
<!--      </div>-->
<!--      <div class="div-body">-->
<!--        <AddTodo></AddTodo>-->
<!--        <Item></Item>-->
<!--      </div>-->
<!--      <div class="div-footer">-->
<!--        <TabGroup></TabGroup>-->
<!--      </div>-->
<!--    </Card>-->
<!--    <Modal-->
<!--        v-model="confirmModel"-->
<!--        @on-ok="back">-->
<!--      <p class="modal-body-p">Do you want to go back to the previous component?</p>-->
<!--    </Modal>-->
<!--  </div>-->
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
      this.$store.commit('changeShow', status);
    },
    openBackModal() {
      this.confirmModel = true;
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    if (this.$store.state.items.length === 0 ) {
      this.$store.dispatch('initItem');
    }
  }
}
</script>

<style scoped>

</style>
