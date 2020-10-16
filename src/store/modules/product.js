import {getProduct} from '@/api/products'

const state = {
  productInfo: {
    name: '',
    price: '',
    num: '',
    status: 0
  }
}

const mutations = {
  SET_PRODUCTINFO: (state, info) => {
    state.productInfo = info
  }
}

const actions = {
  getProductInfo({ commit }, productId) {
    return new Promise((resolve, reject) => {
      getProduct(productId).then(res => {
        let {data} = res
        commit('SET_PRODUCTINFO', data.item)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}