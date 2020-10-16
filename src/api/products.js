import request from '@/utils/request'

export function getProduct(params) {
  return request({
    url: '/vue-admin-template/product',
    method: 'get',
    params
  })
}

export function getProducts(params) {
  return request({
    url: '/vue-admin-template/products/list',
    method: 'get',
    params
  })
}