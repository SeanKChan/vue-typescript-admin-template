<template>
  <el-dialog
    title="系统公告"
    :visible.sync="noticeDialog.isShow"
    width="50%"
    class="NoticeDailog"
  >
    <div class="NoticeDailog_title">
      <h3>系统公告标题</h3>
      <span>2019-06-21</span>
    </div>
    <div class="NoticeDailog_content">
      后台返回数据，后台返回数据，后台返回数据，后台返回数据，后台返回数据，
      后台返回数据，后台返回数据，后台返回数据，后台返回数据，后台返回数据，
      后台返回数据，后台返回数据，后台返回数据，后台返回数据，后台返回数据，
      后台返回数据，后台返回数据，后台返回数据，后台返回数据，后台返回数据，
    </div>
  </el-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class NoticeDialog extends Vue {
    @Prop() noticeDialog !: any
}
</script>
<style lang="scss">
.NoticeDailog {
    font-size:14px;
    .el-dialog{
        height: 60vh;
        .el-dialog__body{
            padding: 10px 20px 0px;
            background: rgb(234,244,249);
            height: calc(100% - 54px);
            overflow-y: auto;
        }
        .NoticeDailog_title{
            overflow: hidden;
            margin-bottom: 20px;
            h3{
                float: left;
                margin:0;
                padding: 0;
            }
            span{
                float: right;
            }
        }
    }
}
</style>
