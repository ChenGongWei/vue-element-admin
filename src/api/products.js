import request from '@/utils/request'

export function getProducts(params) {
  return request({
    url: '/vue-admin-template/products/list',
    method: 'get',
    params
  })
}