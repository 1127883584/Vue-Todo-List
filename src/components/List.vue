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
        <Input type="text" size="large" class="div-body-input"></Input>
        <Button type="primary" size="large" class="div-body-add-button">Add</Button>
        <div class="div-body-data-table">
          <ol class="div-body-data-table-ol">
            <li class="div-body-data-table-ol-li"><Checkbox v-model="single" size="large" class="div-body-data-table-ol-li-checkbox">Checkbox</Checkbox></li>
            <li class="div-body-data-table-ol-li"><Checkbox v-model="single" size="large" class="div-body-data-table-ol-li-checkbox">Checkbox</Checkbox></li>
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
      single: false
    }
  }
}
</script>

<style scoped>

</style>
