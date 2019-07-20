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
        <Input type="text" size="large" class="div-body-input" v-model="itemName"></Input>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
        <div class="div-body-data-table">
          <ol class="div-body-data-table-ol">
            <li class="div-body-data-table-ol-li" v-for="(el, index) in items" :key="index"><Checkbox v-model="el.isSelected" size="large" class="div-body-data-table-ol-li-checkbox">{{el.itemName}}</Checkbox></li>
          </ol>
        </div>
      </div>
      <div class="div-footer">
        <Button size="large" class="div-footer-button" >All</Button>
        <Button size="large" class="div-footer-button" >Active</Button>
        <Button size="large" class="div-footer-button-complete" >Complete</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      single: false,
      items: [],
      itemName: ''
    }
  },
  methods: {
    addItem() {
      let item = {
        itemName: this.itemName,
        isSelected: false
      };
      this.items.push(item);
    }
  }
}
</script>

<style scoped>

</style>
