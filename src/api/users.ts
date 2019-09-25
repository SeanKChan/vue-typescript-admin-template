import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export interface IUserInfo {
  readonly id: number;
  readonly username: string;
  password: string;
  name: string;
  avatar: string;
  introduction: string;
  email: string;
  phone: string;
  roles: Array<string>;
}

export const getUsers = (params: any) =>
  request({
    url: '/users',
    method: 'get',
    params
  })

export const getUserInfo = <T>(data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data
  }) as AxiosPromise<T>

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: 'put',
    data
  })

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'delete'
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/users/register',
    method: 'post',
    data
  })
