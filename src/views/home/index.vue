<template>
  <div class="home">
    <div class="left-container">
      <recent-report-tab class="report-tab-wrapper" />
      <recent-filter-customers class="recent-customers-wrapper" />
    </div>
    <div class="main-container">
      <data-boards />
      <DepositAndAMU />
      <cash-transfer />
      <div class="card-wrapper">
        <CreditCardConversionAnalysis />
        <CustomerLevelRatio />
      </div>
    </div>
    <div class="right-container">
      <RightCase />
    </div>
    <notice-dialog :notice-dialog="PropNoticeDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import RecentReportTab from './components/RecentReportTab.vue'
import RecentFilterCustomers from './components/RecentFilterCustomers.vue'
import DataBoards from './components/DataBoards.vue'
import DepositAndAMU from './components/DepositAndAMU.vue'
import CashTransfer from './components/CashTransfer.vue'
import CreditCardConversionAnalysis from './components/CreditCardConversionAnalysis.vue'
import CustomerLevelRatio from './components/CustomerLevelRatio.vue'
import RightCase from './components/RightCase.vue'
import NoticeDialog from './components/NoticeDialog.vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'
import driverOptions from './driverOptions'
import Cookies from 'js-cookie'

@Component({
  components: {
    RecentFilterCustomers,
    RecentReportTab,
    RightCase,
    DataBoards,
    DepositAndAMU,
    CashTransfer,
    CreditCardConversionAnalysis,
    CustomerLevelRatio,
    NoticeDialog
  }
})
export default class Home extends Vue {
  PropNoticeDialog: any = {
    isShow: false
  }

  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }

  mounted(): void {
    if (Cookies.get('isGuided')) {
      return
    }
    const driver = new Driver(driverOptions)
    driver.defineSteps(steps)
    this.$nextTick(() => {
      driver.start()
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #f3f4f9;
  display: flex;
  flex-flow: row nowrap;

  > * {
    display: flex;
  }

  .left-container {
    width: 352px;
    flex-basis: 352px;
    display: flex;
    flex-flow: column nowrap;

    .report-tab-wrapper, .recent-customers-wrapper {
      margin: 10px auto;
    }
  }

  .right-container {
    width: 352px;
    flex-basis: 352px;
  }

  .main-container {
    margin: 20px 0;
    flex-flow: column nowrap;
    flex: 1;

    > *:not(:last-child) {
      margin-bottom: 20px;
    }

    .card-wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      > * {
        width: calc(50% - 10px);
      }
    }

    ::v-deep .module-title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 9px 20px;
      font-size: 16px;
      color: #000;

      &--main {
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: flex-start;

        &:before {
          content: "";
          display: inline-block;
          width: 3px;
          height: 21px;
          margin-right: 7px;
          background: #2C8DEE;
          visibility: visible;
        }
      }

      &--ext {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
      }

    }
  }

}
</style>
