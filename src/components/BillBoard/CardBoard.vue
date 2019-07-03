<template>
  <el-card class="component-card-board" shadow="hover">
    <p class="component-card-board--date">昨日</p>
    <div class="component-card-board__content">
      <div class="board-icon" :class="cardIcon" />
      <div class="board-number">
        <p class="board-number__title">{{ cardTitle }}</p>
        <count-to
          :start-val="startVal"
          :end-val="cardNumber"
          :duration="duration"
          :decimals="decimals"
          :separator="separator"
          :prefix="prefix"
          :autoplay="true"
          :data-suffix="cardNumberSuffix"
          class="board-number__count"
        />
      </div>
    </div>
    <div class="component-card-board__rate">
      <div class="compare-year">
        较上年底
        <rate-arrow :label="yearRateLabel" :is-rise="yearRate > 0" />
      </div>
      <div class="compare-day">
        较上日
        <rate-arrow :label="dayRateLabel" :is-rise="dayRate > 0" />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import CountTo from 'vue-count-to'
import RateArrow from './RateArrow.vue'

@Component({
  components: {
    CountTo,
    RateArrow
  }
})
export default class CardBoard extends Vue {
  @Prop(String) readonly cardIcon!: string
  @Prop(String) readonly cardTitle!: string
  @Prop(Number) readonly cardNumber!: number
  @Prop({ default: '', type: String }) readonly cardNumberSuffix!: string
  @Prop(Number) readonly yearRate!: number
  @Prop(Number) readonly dayRate!: number

  startVal: number = 0
  duration: number = 1500
  decimals: number = 0
  separator: string = ','
  prefix: string = ''

  get yearRateLabel() {
    return `${ (Math.abs(this.yearRate) * 100).toFixed(2) }%`
  }

  get dayRateLabel() {
    return `${ (Math.abs(this.dayRate) * 100).toFixed(2) }%`
  }
}

</script>

<style lang="scss" scoped>
.component-card-board {
  position: relative;

  ::v-deep .el-card__body {
    padding: 15px 25px;
  }

  &--date {
    position: absolute;
    top: 12px;
    right: 20px;
    width: 46px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.14901960784313725);
    opacity: 0.6;
    border-radius: 4px;
    font-size: 12px;
  }

  &__content {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 20px;

    .board-icon {
      display: inline-flex;
      width: 63px;
      height: 63px;
      background-repeat: no-repeat;
      background-size: contain;

      &.customer {
        background-image: url("~assets/images/icon-customer.png");
      }

      &.phone {
        background-image: url("~assets/images/icon-phone.png");
      }

      &.card {
        background-image: url("~assets/images/icon-card.png");
      }
    }

    .board-number {
      display: inline-flex;
      flex-flow: column nowrap;
      margin-left: 20px;

      &__title {
        font-size: 14px;
        font-weight: bold;
      }

      &__count {
        margin-top: 10px;
        font-size: 32px;

        &:after {
          content: attr(data-suffix);
          font-size: 12px;
          visibility: visible;
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }

  &__rate {
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    .compare-year, .compare-day {
      font-size: 12px;
      font-weight: 400;
      color: #000;
    }
  }
}
</style>
