const Mock = require('mockjs')

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    title: '@sentence(10, 15)',
    'status|1': ['on', 'off'],
    author: 'jack',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }],
  'item|1': [{
    id: '@id',
    name: '绝味鸭脖',
    price: '@integer(300, 5000)',
    num: '@integer(300, 5000)',
    'status|1': [0, 1]
  }]
})


module.exports = [
  {
    url: '/vue-admin-template/products/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/product',
    type: 'get',
    response: config => {
      const item = data.item
      return {
        code: 5008,
        data: {
          message: '获取成功',
          item
        }
      }
    }
  }
]
