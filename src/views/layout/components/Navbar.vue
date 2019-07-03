<template>
  <div class="nav-bar">
    <div class="system-logo" />
    <top-nav-menu class="system-menu" />
    <el-dropdown
      class="avatar-container"
      trigger="click"
    >
      <div class="avatar-wrapper">
        <el-avatar :size="35" :src="userAvatar + '?imageView2/1/w/80/h/80'" />
        <i class="word-welcome">{{ loginInWords }}</i>
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
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import TopNavMenu from './TopNavMenu.vue'

@Component({
  components: { TopNavMenu }
})
export default class Navbar extends Vue {
  private loginInWords: string = ''

  get userAvatar(): string {
    return UserModule.avatar
  }

  get userName(): string {
    return UserModule.name
  }

  @Watch('userName', { immediate: true })
  onUserNameChanged(val: string) {
    const curHour = new Date().getHours()
    let loginInWords = ''
    if (curHour <= 12) {
      loginInWords = '上午好，'
    } else if (curHour > 12 && curHour <= 18) {
      loginInWords = '下午好，'
    } else {
      loginInWords = '晚上好，'
    }
    this.loginInWords = loginInWords + val
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
  padding: 0 40px;
  height: $topBarH;
  background: rgba(48, 65, 86, 1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  .system-logo {
    display: inline-flex;
    order: 0;
    width: 152px;
    height: 35px;
    background: url("~assets/images/logo_white.png") no-repeat;
    background-size: contain;
  }

  .system-menu {
    display: inline-flex;
    order: 1;
    flex: 2;
    background: initial;
    justify-content: center;
    border-bottom: none;

    ::v-deep .el-menu-item {
      padding: 0 40px;
      height: 50px;
      line-height: 50px;
      color: #fff;
      border: none;

      &:not(.is-disabled) {
        &:hover, &:focus {
          background: linear-gradient(360deg, rgba(42, 78, 165, 1) 0%, rgba(32, 120, 210, 1) 100%);
        }
      }

      &.is-active {
        background: linear-gradient(360deg, rgba(42, 78, 165, 1) 0%, rgba(32, 120, 210, 1) 100%);
      }
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
        color: #fff;
        font-size: 14px;
        margin-left: 11px;
      }

    }
  }
}
</style>
