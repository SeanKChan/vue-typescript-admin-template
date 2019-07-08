<template>
  <el-tabs
    v-model="activeIndex"
    type="border-card"
    class="right-case"
    @tab-click="handlechange"
  >
    <el-tab-pane label="我的案例" name="1">
      <el-scrollbar v-if="RecentReportList.length !== 0" class="el-scrollbar1">
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="spell_list_span">智能拼表</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-delete" />
              <i class="el-icon-share" />
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="customer_group_span">客群筛选</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-delete" />
              <i class="el-icon-share" />
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="conversion_span">转化分析</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-delete" />
              <i class="el-icon-share" />
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="retain_span">留存分析</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-delete" />
              <i class="el-icon-share" />
            </div>
          </el-tooltip>
        </div>
      </el-scrollbar>
      <el-scrollbar v-else :class="className" />
    </el-tab-pane>
    <el-tab-pane name="2">
      <span slot="label" class="tab_pane_label"><em>NEW</em> 案例市场</span>
      <el-autocomplete v-model="searchString" type="search" placeholder="请输入案例名称" :fetch-suggestions="querySearch" @select="SelectNode">
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-autocomplete>
      <el-scrollbar v-if="RecentReportList.length !== 0" class="el-scrollbar2">
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="spell_list_span">智能拼表</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-share" />
              <div class="info">
                <span>分享人：amdin</span>
                <em class="shareNum" @click="Quote">5</em>
                <em class="giveFive">210</em>
              </div>
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="customer_group_span">客群筛选</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-share" />
              <div class="info">
                <span>分享人：amdin</span>
                <em class="shareNum">5</em>
                <em class="giveFive">210</em>
              </div>
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="conversion_span">转化分析</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-share" />
              <div class="info">
                <span>分享人：amdin</span>
                <em class="shareNum">5</em>
                <em class="giveFive">210</em>
              </div>
            </div>
          </el-tooltip>
        </div>
        <div class="tab-pane-item">
          <div class="spell_list_title">
            <span class="retain_span">留存分析</span>
            <em><i class="el-icon-plus" />新增</em>
          </div>
          <el-tooltip v-for="(item,index) in RecentReportList" :key="index" class="el-tooltip-item" effect="dark" :content="item.name" placement="bottom-end">
            <div>
              <p @click="gourl">{{ item.name }}</p>
              <i class="el-icon-share" />
              <div class="info">
                <span>分享人：amdin</span>
                <em class="shareNum">5</em>
                <em class="giveFive">210</em>
              </div>
            </div>
          </el-tooltip>
        </div>
      </el-scrollbar>
      <el-scrollbar v-else :class="className" />
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
    { 'name': '单元格属性', 'date': '2018-09-15' }
  ]
  private searchData:any = []
  private searchString:String = ''
  get className() {
    if (this.RecentReportList.length === 0) {
      return 'noDatas'
    } else {
      return ''
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
        message: '我的案例数据'
      })
    } else {
      this.$message({
        type: 'success',
        message: '案例市场数据'
      })
    }
  }
  private querySearch(string:string, cb:Function) {
    var data:any = []
    for (let index = 0; index < this.RecentReportList.length; index++) {
      data.push({ value: this.RecentReportList[index].name })
    }
    setTimeout(() => {
      cb(data)
    }, 200)
  }
  private SelectNode(item:any) {
    console.log(item)
  }
  private Quote() {
    this.$message({
      type: 'success',
      message: '模型引用成功，可到我的模型查看'
    })
  }
}
</script>
<style lang="scss">
.right-case{
  width: 312px;
  margin: 10px auto;
  font-size:14px;
  .el-tabs__content{
    height: calc(100% - 40px);
    overflow-x: hidden;
  }
  .el-tab-pane{
    overflow: hidden;
    margin-bottom: 26px;
    height: 100%;
    .el-autocomplete{
      width: 100%;
      margin-bottom:15px;
      .el-input__inner{
        height: 30px;
        line-height: 30px;
      }
      .el-input__icon{
        line-height: 30px;
      }
    }
    .el-scrollbar1{
      height: 100%;
      .el-scrollbar__view{
        height: 100%;
      }
      .el-scrollbar__wrap{
        overflow-x: hidden;
      }
    }
    .el-scrollbar2{
      height: calc(100% - 45px);
      .el-scrollbar__view{
        height: calc(100% - 45px);
      }
      .el-scrollbar__wrap{
        overflow-x: hidden;
      }
    }
    .spell_list_title{
      overflow: hidden;
      padding-bottom: 12px;
      margin-bottom:12px;
      border-bottom:1px solid rgba(228,228,228,1);
      span{
        float: left;
        margin-left: 8px;
        height: 22px;
        line-height: 22px;
        padding-left:30px;
        background-size: 22px 22px;
      }
      em{
        cursor: pointer;
        float: right;
        margin-right: 8px;
        i{
          margin-right: 5px;
        }
      }
      .spell_list_span{
        background: url('~assets/home/spellList.png') 0 0 no-repeat;
      }
      .customer_group_span{
        background: url('~assets/home/customer_group.png') 0 0 no-repeat;
      }
      .conversion_span{
        background: url('~assets/home/conversion.png') 0 0 no-repeat;
      }
      .retain_span{
        background: url('~assets/home/retain.png') 0 0 no-repeat;
      }
    }
  }
  .tab_pane_label{
    position: relative;
    em{
      position:absolute;
      top:-5px;
      right:-28px;
      width:28px;
      height: 14px;
      background-color:rgba(255,73,73,1);
      font-size:12px;
      color:#fff;
      line-height: 14px;
      border-radius: 4px;
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
        // display: none;
        height: 16px;
        float: right;
        margin-right: 8px;
        background-size: 100%;
      }
      .el-icon-delete:hover{
        color:red;
      }
      .info{
        margin-top: 8px;
        font-size:12px;
        color:rgba(0,0,0,0.45);
        width: 100%;
        float: left;
        span{
          float: left;
        }
        em{
          float: right;
          margin-right: 6px;
          height: 16px;
          padding-left: 20px;
          line-height: 16px;
        }
        .shareNum{
          background: url('~assets/home/share.png') 0 0 no-repeat;
        }
        .giveFive{
          background: url('~assets/home/givefive.png') 0 0 no-repeat;
          &:hover{
            background: url('~assets/home/givefivehover.png') 0 0 no-repeat;
          }
        }
      }
      // &:hover i{
      //   display: block;
      // }
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
