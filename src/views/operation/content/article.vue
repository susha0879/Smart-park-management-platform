<!-- 文章管理 -->
<template>
  <div>
    <!-- 公共标题栏 -->
    <div id="title">
      <h1>
        <span>1</span>
        &nbsp; &nbsp; {{titleName}}
      </h1>
      <div>
        <el-button type="primary">新增</el-button>
        <el-button type="warning">批量删除</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <div id="form">
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border="true"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="name" width="120" />
        <el-table-column property="address" label="Address" show-overflow-tooltip />
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >全选</el-button
        >
        <el-button @click="toggleSelection()">清除</el-button>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" >
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'
  interface User {
  date: string
  name: string
  address: string
}
  export default {
  data () {
    return {
      titleName:"文章管理",
      tableData: [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

</script>
<style scoped>
  #title{
    margin: 10px;
    background-color: white;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  #title h1{
    margin-left:45px;
    display: inline-block;
  }
  #title h1 span{
    display: inline-block;
    width: 10px;
    height: 30px;
    color: #5e80ea;
    line-height: 30px;
    background-color: #5e80ea;
  }
  #title div{
    margin-right: 30px;
  }
  #form{
    margin-left :10px;
    margin-right:10px; 
  }
</style>