<template>
  <div>
    <Card style="width:800px;margin:100px auto;background-color: white; font-size: 18px">
      <div class="div-header" style="margin-top: 30px;margin-left: 20px;">
        <div style="width: 100%;text-align: left">
          <h1>Jquery To Do List</h1>
        </div>
        <div style="width: 100%;text-align: left;margin-top: 10px">
          <h3><i>Simple Todo List with adding and filter by diff status.</i></h3>
        </div>
      </div>
      <div class="div-body" style="margin-top: 30px;text-align: left;margin-left: 20px;height: 400px">
        <Input type="text" size="large" style="width: 550px"></Input>
        <Button type="primary" size="large" style="margin-left: 10px;width: 70px">Add</Button>
        <div style="margin-top: 50px" class="data-table">

        </div>
      </div>
      <div class="div-footer" style="margin-left: 20px;">
        <Button size="large" style="color: #2d8cf0;width:70px;margin-right: 50px" >All</Button>
        <Button size="large" style="color: #2d8cf0;width:70px;margin-right: 50px" >Active</Button>
        <Button size="large" style="color: #2d8cf0;width:100px;margin-right: 50px" >Complete</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
