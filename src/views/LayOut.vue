<template>
  <!-- 顶部通栏 -->
  <app-navbar></app-navbar>
  <!-- 头部组件 -->
  <app-header></app-header>
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <app-footer></app-footer>
</template>

<script>
import AppNavbar from '@/components/app-navbar'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
import { useStore } from 'vuex'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: 'LayOut',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  // 获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang="less">
</style>
