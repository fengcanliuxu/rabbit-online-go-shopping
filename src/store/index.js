import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 引入模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储在localstorage中
    createPersistedstate({
      // 本地存储名字
      key: 'userInfo',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
