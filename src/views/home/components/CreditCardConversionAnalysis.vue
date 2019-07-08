<template>
  <div class="credit-card-conversion-analysis">
    <p class="module-title">
      <span class="module-title--main">信用卡转化分析</span>
      <em class="module-title--ext">过去15天</em>
    </p>
    <div class="credit-card-conversion-analysis__content">
      <div class="credit-card-conversion-analysis__content--board">
        <ve-funnel
          :data="chartData"
          :grid="grid"
          :legend="legend"
          :settings="chartSettings"
          height="235px"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CreditCardConversionAnalysis extends Vue {
  private grid: any = {
    show: false,
    bottom: 15
  }

  private chartSettings: any = {
    useDefaultOrder: true,
    filterZero: true
  }

  private legend: any = {
    top: 15
  }

  private chartData: any = {
    columns: [ '状态', '数值' ],
    rows: [
      { '状态': '展示', '数值': 900 },
      { '状态': '访问', '数值': 100 },
      { '状态': '零', '数值': 0 },
      { '状态': '点击', '数值': 300 },
      { '状态': '订单', '数值': 200 }
    ]
  }
}
</script>
<style lang="scss" scoped>
.credit-card-conversion-analysis {
  background: rgba(255, 255, 255, 1);
   &:hover,&:focus {
    box-shadow: 0 2px 12px 0 rgba(180, 75, 75, 0.1);
  }

  .module-title {
    border-bottom: 1px solid #E4E4E4;
  }

  &__content {
    padding: 0 33px;
    display: flex;
    flex-flow: row nowrap;

    &--board {
      flex: 1;
    }
  }
}
</style>
