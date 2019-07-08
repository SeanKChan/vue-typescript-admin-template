<template>
  <div class="recent-filter-customers">
    <h3 class="title">
      <span>近期筛选的客群</span>
    </h3>
    <el-scrollbar :class="className">
      <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
        <div v-if="item.ischeck">
          <p @click="gourl">{{ item.name }}</p>
          <el-button size="mini" class="monitor" @click="monitor">监控</el-button>
        </div>
        <div v-else>
          <p @click="gourl">{{ item.name }}</p>
          <i class="checkView" />
          <el-button size="mini" class="view" @click="view">查看</el-button>
        </div>
      </el-tooltip>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RecentFilterCustomers extends Vue {
  private RecentReportList:any = [
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': false },
    { 'name': '单元格属性', 'date': '2018-09-15', 'ischeck': true },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15', 'ischeck': true }
  ];
  get className() {
    if (this.RecentReportList.length === 0) {
      return 'el_scrollbar1 noDatas'
    } else {
      return 'el_scrollbar1'
    }
  }
  private gourl() {
    this.$message({
      type: 'success',
      message: '跳转对应页面'
    })
  }
  private monitor() {
    this.$confirm('是否监控该客群重要指标变化', '提示信息', {
      distinguishCancelAndClose: true,
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '监控成功'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '取消操作'
      })
    })
  }
  private view() {
    this.$message({
      type: 'success',
      message: '跳转对应页面'
    })
  }
}
</script>
<style lang="scss">
.recent-filter-customers {
  width: 312px;
  height: 50%;
  font-size:14px;
  overflow: hidden;
  padding-bottom:10px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  .title{
    margin:0px;
    height: 42px;
    font-size:16px;
    line-height: 22px;
    border-bottom:1px solid #E4E4E4;
    padding: 10px 20px;
    color:rgba(0,0,0,0.65);
    span{
      border-left:3px solid #2c8dee;
      padding-left:5px;
    }
  }
  .noDatas{
    background: url('~assets/home/noDatas.png') center center no-repeat;
    background-size:149px 146px;
  }
  .el_scrollbar1{
    height: calc(100% - 42px);
    .el-scrollbar__wrap{
      overflow-x: hidden;
    }
    .el-scrollbar__view{
      padding: 20px 0px;
      height: 100%;
    }
  }
  .el-tooltip-item{
      margin: 0px;
      padding: 0 20px 0;
      margin-bottom: 10px;
      cursor: pointer;
      overflow: hidden;
      p{
        max-width: 65%;
        overflow: hidden;
        height: 28px;
        line-height: 28px;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        margin:0;
      }
      .checkView{
        background: url('../../../assets/home/checkView.png') 7px 6px no-repeat;
        background-size: 12px 14px;
        height: 28px;
        width: 28px;
        float: left;
      }
      .view{
        background-color:rgba(19,206,102,0.1);
        border-color:rgba(19,206,102,0.2);
        color:rgba(19,206,102,1);
      }
      .monitor{
        background-color:rgba(32,160,255,0.1);
        border-color:rgba(32,160,255,0.2);
        color:rgba(32,160,255,1);
      }
      .el-button{
        float: right;
      }
  }
}
</style>
