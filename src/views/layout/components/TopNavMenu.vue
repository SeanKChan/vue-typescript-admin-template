<template>
  <el-menu :default-active="activeIndex" mode="horizontal" >
    <el-menu-item index="1">
      <router-link to="/home">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">报表</el-menu-item>
    <el-menu-item index="3">自助分析</el-menu-item>
    <el-menu-item index="4">知秋</el-menu-item>
    <el-menu-item index="5">轻舟</el-menu-item>
    <el-menu-item index="6">数据资产</el-menu-item>
    <el-menu-item index="7">创新社区</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TopMenuEnum } from '@/constants'

@Component
export default class TopNavMenu extends Vue {
  activeIndex: string = '1'
}
</script>

<style></style>
