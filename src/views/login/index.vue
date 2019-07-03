<template>
  <div class="login-container">
    <img class="login-slogan" src="~assets/images/login-slogan.png" alt="一站式业务数据化解决方案">
    <img class="login-assets" src="~assets/images/bg-login-center.png" alt="这是一张图片">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <p class="title">请使用OA账号密码登录</p>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on"
          placeholder="username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon name="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          :type="pwdType"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :name="pwdType === 'password' ? 'eye-off' : 'eye-on'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">
import { isValidUsername } from '@/utils/validate'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { Route } from 'vue-router'
import { Form as ElForm } from 'element-ui'

const validateUsername = (rule: any, value: string, callback: any) => {
  if (!isValidUsername(value)) {
    callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const validatePass = (rule: any, value: string, callback: any) => {
  if (value.length < 5) {
    callback(new Error('密码不能小于5位'))
  } else {
    callback()
  }
}

@Component
export default class Login extends Vue {
  private loginForm = {
    username: 'admin',
    password: 'admin'
  }
  private loginRules = {
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePass }]
  }
  private loading = false
  private pwdType = 'password'
  private redirect: string | undefined = undefined

  @Watch('$route', { immediate: true })
  private OnRouteChange(route: Route) {
    // TODO: remove the "as string" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    this.redirect = route.query && route.query.redirect as string
  }

  private showPwd() {
    if (this.pwdType === 'password') {
      this.pwdType = ''
    } else {
      this.pwdType = 'password'
    }
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true
        try {
          await UserModule.Login(this.loginForm)
          this.$router.push({ path: this.redirect || '/' })
        } catch (error) {
          console.error('[login error]', error.message)
        }
        this.loading = false
      } else {
        return false
      }
    })
  }
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";

.login-container {
  .el-input {
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      color: $lightGray;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("~assets/images/bg-login.png") no-repeat;
  background-size: cover;

  .login-slogan {
    position: absolute;
    top: 132px;
    left: 236px;
    width: 478px;
    height: 33px;
  }

  .login-assets {
    position: absolute;
    top: 243px;
    left: 132px;
    width: 687px;
    height: 482px;
  }

  .login-form {
    position: absolute;
    top: 290px;
    right: 250px;
    width: 326px;
  }

  .el-input {
    display: inline-block;
    width: 85%;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title {
    font-size: 14px;
    color: $lightGray;
    text-align: left;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
