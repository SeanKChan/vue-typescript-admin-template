<template>
  <el-tabs
    v-model="activeIndex"
    type="border-card"
    class="recent-report-tab"
  >
    <el-tab-pane label="近期浏览报表" name="1">
      <dl class="report-list">
        <dd><i class="el-icon-document" />有效户分成明细表</dd>
        <dd><i class="el-icon-document" />有效户分成明细表</dd>
        <dd><i class="el-icon-document" />有效户分成明细表</dd>
        <dd><i class="el-icon-document" />有效户分成明细表</dd>
        <dd><i class="el-icon-document" />有效户分成明细表</dd>
      </dl>
    </el-tab-pane>
    <el-tab-pane label="收藏的报表" name="2">
      <dl class="report-list">
        <dd class="data-empty">暂无数据</dd>
      </dl>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RecentReportTab extends Vue {
  activeIndex: string = '1'
}
</script>
<style lang="scss" scoped>
.recent-report-tab {
  .report-list {
    min-height: 30vh;

    dd {
      line-height: 2;

      &.data-empty {
        text-align: center;
      }
    }
  }
}

</style>
