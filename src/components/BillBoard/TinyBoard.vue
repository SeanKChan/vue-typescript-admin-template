<template>
  <div class="component-tiny-board">
    <div class="component-tiny-board__content">
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
          class="board-number__count"
        />
      </div>
    </div>
    <div class="component-tiny-board__rate">
      <div class="compare-year">
        较上年底
        <rate-arrow :label="yearRateLabel" :is-rise="yearRate > 0" />
      </div>
      <div class="compare-day">
        较上日
        <rate-arrow :label="dayRateLabel" :is-rise="dayRate > 0" />
      </div>
    </div>
  </div>
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
  @Prop({ type: String, default: '--' }) readonly cardTitle!: string
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
.component-tiny-board {
  position: relative;
  padding: 15px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(228, 228, 228, 1)
  }

  &__content {
    display: flex;
    flex-flow: row nowrap;

    .board-number {
      display: inline-flex;
      flex-flow: column nowrap;

      &__title {
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
      }

      &__count {
        line-height: 40px;
        font-size: 30px;
      }
    }
  }

  &__rate {
    display: flex;
    flex-flow: column nowrap;

    .compare-year, .compare-day {
      font-size: 12px;
      font-weight: 400;
      color: #000;
      line-height: 19px;
    }
  }
}
</style>
