<template>
  <el-tabs type="card"
           v-model="activeIndex">
    <el-tab-pane label="近期浏览报表" name="1">
    </el-tab-pane>
    <el-tab-pane label="收藏的报表" name="2"></el-tab-pane>
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

</style>
