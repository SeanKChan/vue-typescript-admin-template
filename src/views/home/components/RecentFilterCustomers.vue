<template>
  <div class="recent-filter-customers">
    <h4>近期筛选的客群</h4>
    <dl class="customer-list">
      <dd><i class="el-icon-s-custom">年轻代发客群</i></dd>
      <dd><i class="el-icon-s-custom">年轻代发客群</i></dd>
      <dd><i class="el-icon-s-custom">年轻代发客群</i></dd>
      <dd><i class="el-icon-s-custom">年轻代发客群</i></dd>
      <dd><i class="el-icon-s-custom">年轻代发客群</i></dd>
    </dl>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RecentFilterCustomers extends Vue {
}
</script>
<style lang="scss" scoped>
.recent-filter-customers {
  width: 100%;
  background: #fff;
  border-radius: 5px;

  .customer-list {

  }
}
</style>
