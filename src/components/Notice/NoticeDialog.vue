<template>
  <el-dialog>
    111
  </el-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NoticeDialog extends Vue {
  @Prop(Object) readonly NoticeInfo!: Object
}
</script>
<style lang="scss" scoped>
.data-boards {
  width: 100%;

  &__cards {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 10px;

    &__item {
      width: 285px;
      height: 150px;
    }
  }
}
</style>
