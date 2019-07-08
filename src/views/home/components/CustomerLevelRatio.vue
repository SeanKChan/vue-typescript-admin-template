<template>
  <div class="CustomerLevelRatio-analysis">
    <p class="module-title">
      <span class="module-title--main">客户等级数量及占比</span>
      <em class="module-title--ext" />
    </p>
    <div class="CustomerLevelRatio-analysis__content">
      <div class="CustomerLevelRatio-analysis__content--board">
        <ve-ring
          :data="chartData"
          :grid="grid"
          :legend="legend"
          :extend="chartExtend"
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
export default class CustomerLevelRatio extends Vue {
  private grid: any = {
    show: false,
    bottom: 15
  }

  chartExtend: any = {
    series: {
      center: [ '40%', '50%' ],
      radius: [ '50%', '70%' ]
    }
  }

  private legend: any = {
    orient: 'vertical',
    right: 15,
    top: '30%',
    bottom: 15
  }

  private chartSettings: any = {
    limitShowNum: 8
  }

  private chartData: any = {
    columns: [ '种类', '数量' ],
    rows: [
      { '种类': '大众', '数量': 1393 },
      { '种类': '财富', '数量': 3530 },
      { '种类': '私行', '数量': 2923 },
      { '种类': '准私行', '数量': 1723 },
      { '种类': '成长客户', '数量': 3792 }
    ]
  }
}
</script>
<style lang="scss" scoped>
.CustomerLevelRatio-analysis {
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
