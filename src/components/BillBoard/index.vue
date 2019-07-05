<template>
  <component
    :is="cardType"
    :card-icon="cardIcon"
    :card-title="cardTitle"
    :card-number="cardNumber"
    :card-number-suffix="cardNumberSuffix"
    :year-rate="yearRate"
    :day-rate="dayRate"
  />
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import CardBoard from './CardBoard.vue'
import TinyBoard from './TinyBoard.vue'

@Component({
  components: {
    CardBoard,
    TinyBoard
  }
})
export default class BillBoard extends Vue {
  @Prop({ type: String, default: 'CardBoard' }) readonly cardType!: string
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

