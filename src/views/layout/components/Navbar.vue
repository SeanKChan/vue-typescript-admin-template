<template>
  <div class="nav-bar">
    <div class="system-logo"/>
    <top-nav-menu class="system-menu"/>
    <el-dropdown
      class="avatar-container"
      trigger="click"
    >
      <div class="avatar-wrapper">
        <el-avatar :size="40" :src="avatar + '?imageView2/1/w/80/h/80'"/>
        <i class="word-welcome">下午好，{{ name }}</i>
      </div>
      <el-dropdown-menu
        slot="dropdown"
        class="user-dropdown"
      >
        <router-link
          class="inlineBlock"
          to="/"
        >
          <el-dropdown-item>
            系统公告
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span
            style="display:block;"
            @click="logout"
          >登出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import TopNavMenu from './TopNavMenu.vue'

@Component({
  components: { TopNavMenu }
})
export default class Navbar extends Vue {
  get avatar() {
    return UserModule.avatar
  }

  get name() {
    return UserModule.name
  }

  private logout() {
    UserModule.LogOut().then(() => {
      location.reload() // 为了重新实例化vue-router对象 避免bug
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.nav-bar {
  padding: 0 30px;
  height: $topBarH;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  .system-logo {
    display: inline-flex;
    order: 0;
    width: 170px;
    height: 50px;
    background: teal;
  }

  .system-menu {
    display: inline-flex;
    order: 1;
    flex: 2;
    justify-content: center;
    border-bottom: none;

    ::v-deep .el-menu-item {
      padding: 0 40px;
    }
  }

  .avatar-container {
    height: 100%;
    display: inline-flex;
    order: 2;
    justify-self: flex-end;

    .avatar-wrapper {
      cursor: pointer;
      position: relative;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .word-welcome {
        color: #333;
        font-size: 14px;
        margin-left: 5px;
      }

    }
  }
}
</style>
