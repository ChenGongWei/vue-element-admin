import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user/account/login',
    method: 'post',
    params: data
  })
}

// 获取用户信息
export function getInfo(data) {
  return request({
    url: '/user/select',
    method: 'get',
    params: data
  })
}

// 退出
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
