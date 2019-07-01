<template>
  <div class="home">
    <div class="left-container">
      <recent-report-tab/>
      <recent-filter-customers/>
    </div>
    <div class="main-container"></div>
    <div class="right-container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import RecentReportTab from './components/RecentReportTab.vue'
import RecentFilterCustomers from './components/RecentFilterCustomers.vue'

@Component({
  components: {
    RecentFilterCustomers,
    RecentReportTab
  }
})
export default class Home extends Vue {
  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background: #f7f9fa;
  display: flex;
  flex-flow: row nowrap;

  > * {
    display: flex;
  }

  .left-container {
    width: 260px;
    display: flex;
    flex-flow: column nowrap;
  }

  .right-container {
    width: 260px;
    background: yellow;
  }

  .main-container {
    width: calc(100% - 520px);
    background: blue;
  }

}
</style>
