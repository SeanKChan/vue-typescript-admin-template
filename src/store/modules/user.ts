import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators'
import { login, logout, getInfo, IloginForm } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import store from '@/store'

export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = '';
  public name = '';
  public avatar = '';
  public roles = [];

  @Action({ commit: 'SET_TOKEN' })
  public async Login(userInfo: IloginForm) {
    const data: any = await login(userInfo)
    const { token } = data
    setToken(token)
    return token
  }

  @Action({ commit: 'SET_TOKEN' })
  public async FedLogOut() {
    removeToken()
    return ''
  }

  @MutationAction({ mutate: ['roles', 'name', 'avatar'] })
  public async GetUserInfo() {
    const token = getToken()
    if (token === undefined) {
      throw Error('GetUserInfo: token is undefined!')
    }
    const data: any = await getInfo(token)
    if (data.roles && data.roles.length > 0) {
      return {
        roles: data.roles,
        name: data.name,
        avatar: data.avatar
      }
    } else {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
  }

  @MutationAction({ mutate: ['token', 'roles'] })
  public async LogOut() {
    if (getToken() === undefined) {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    return {
      token: '',
      roles: []
    }
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }
}

export const UserModule = getModule(User)
