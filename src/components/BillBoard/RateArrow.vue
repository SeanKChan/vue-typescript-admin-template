<template>
  <div class="component-rate-arrow" :class="rateClass">
    {{ label }}
    <i class="el-icon-bottom" />
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class RateArrow extends Vue {
  @Prop(String) readonly label!: string
  @Prop(Boolean) readonly isRise!: boolean

  get rateClass() {
    return this.isRise ? 'rise' : ''
  }
}
</script>
<style lang="scss" scoped>
.component-rate-arrow {
  display: inline-flex;
  font-size: 12px;
  color: #FF4949;
  align-items: center;

  .el-icon-bottom {
    margin-left: 2px;
  }

  &.rise {
    color: #2C8DEE;

    .el-icon-bottom {
      transform: rotate(180deg);
    }
  }
}
</style>
