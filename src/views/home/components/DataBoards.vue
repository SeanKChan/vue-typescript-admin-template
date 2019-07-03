<template>
  <div class="data-boards">
    <p class="module-title">
      <span class="module-title--main">我的数据看板</span>
    </p>
    <div class="data-boards__cards">
      <bill-board
        class="data-boards__cards__item"
        card-icon="customer"
      />
      <bill-board
        class="data-boards__cards__item"
        card-icon="phone"
      />
      <bill-board
        class="data-boards__cards__item"
        card-icon="card"
      />

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

    &__item {
      width: 285px;
      height: 150px;
    }
  }
}
</style>
