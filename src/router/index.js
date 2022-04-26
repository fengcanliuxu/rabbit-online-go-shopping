import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/LayOut.vue')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category/IndexA')
const SubCategory = () => import('@/views/category/SubA')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
