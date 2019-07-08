<template>
  <div class="data-boards">
    <p class="module-title">
      <span class="module-title--main">我的数据看板</span>
    </p>
    <div class="data-boards__cards">
      <el-row :gutter="20" class="data-boards__cards--wrapper">
        <el-col :span="8">
          <bill-board
            class="data-boards__cards__item"
            card-icon="customer"
          />
        </el-col>
        <el-col :span="8">
          <bill-board
            class="data-boards__cards__item"
            card-icon="phone"
          />
        </el-col>
        <el-col :span="8">
          <bill-board
            class="data-boards__cards__item"
            card-icon="card"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BillBoard from '@/components/BillBoard/index.vue'

@Component({
  components: {
    BillBoard
  }
})
export default class DataBoards extends Vue {

}
</script>
<style lang="scss" scoped>
.data-boards {
  width: 100%;

  &__cards {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;

    &--wrapper {
      width: 100%;
    }

    &__item {
      width: 100%;
    }
  }
}
</style>
