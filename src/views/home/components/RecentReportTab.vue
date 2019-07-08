<template>
  <el-tabs
    v-model="activeIndex"
    type="border-card"
    class="recent-report-tab"
    @tab-click="handlechange"
  >
    <el-tab-pane label="近期浏览报表" name="1">
      <el-scrollbar :class="className">
        <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
          <div>
            <p @click="gourl">{{ item.name }}</p>
          </div>
        </el-tooltip>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="收藏的报表" name="2">
      <el-button size="mini" class="addBtn" @click="addBtn">+添加收藏报表</el-button>
      <el-scrollbar :class="className2">
        <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
          <div>
            <p @click="gourl">{{ item.name }}</p>
            <i @click="cancelCollectionBtn(index)" />
          </div>
        </el-tooltip>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RecentReportTab extends Vue {
  activeIndex: string = '1';
  private RecentReportList:any = [
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' },
    { 'name': '单元格属性', 'date': '2018-09-15' },
    { 'name': '功能、操作界面、环境、插件配置', 'date': '2018-09-15' }

  ];
  get className() {
    if (this.RecentReportList.length === 0) {
      return 'el_scrollbar1 noDatas'
    } else {
      return 'el_scrollbar1'
    }
  }
  get className2() {
    if (this.RecentReportList.length === 0) {
      return 'el_scrollbar2 noDatas'
    } else {
      return 'el_scrollbar2'
    }
  }
  private cancelCollectionBtn(id:Number | String) {
    this.$confirm('是否取消收藏该报表', '提示信息', {
      distinguishCancelAndClose: true,
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '取消成功'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '取消操作'
      })
    })
  }
  private addBtn() {
    this.$message({
      type: 'success',
      message: '添加成功'
    })
  }
  private gourl() {
    this.$message({
      type: 'success',
      message: '跳转对应页面'
    })
  }
  private handlechange(item:any) {
    if (item.name === '1') {
      this.$message({
        type: 'success',
        message: '加载最近访问报表数据'
      })
    } else {
      this.$message({
        type: 'success',
        message: '加载收藏数据'
      })
    }
  }
}
</script>
<style lang="scss">
.recent-report-tab{
  width: 312px;
  height: 50%;
  font-size:14px;
  .el-tabs__content{
    height: calc(100% - 39px);
  }
  .el-tab-pane{
    overflow: hidden;
    height:100%;
    .addBtn{
      margin-bottom: 20px;
      width:100%;
    }
    .el_scrollbar1{
      height: 100%;
      .el-scrollbar__wrap{
        height: 100% ;
        overflow-x: hidden;
      }
      .el-scrollbar__view{
        height: 100%;
      }
    }
    .el_scrollbar2{
      height: 100%;
      .el-scrollbar__wrap{
        height: calc(100% - 48px);
        overflow-x: hidden;
      }
      .el-scrollbar__view{
        height: calc(100% - 48px);
      }
    }
  }
  .el-tabs__nav{
      float: none;
      width: 100%;
      .el-tabs__item{
        width:50%;
        text-align: center
      }
    }
  .el-tooltip-item{
      margin: 0px;
      padding: 0 10px 0;
      margin-bottom: 20px;
      cursor: pointer;
      overflow: hidden;
      p{
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        margin:0;
      }
      i{
        width: 16px;
        display: none;
        height: 16px;
        float: right;
        margin-right: 8px;
        background: url('~assets/home/cancle_collection.png') 0 0 no-repeat;
        background-size: 100%
      }
      &:hover i{
        display: block;
      }
  }
  .noDatas{
    background: url('~assets/home/noDatas.png') center center no-repeat;
    background-size:149px 146px;
  }
  .el-tabs__item.is-active::before{
    content: '';
    width:100%;
    height:2px;
    position: absolute;
    top:0px;
    left:0px;
    background: rgba(44,141,238,1);
  }
}
</style>
