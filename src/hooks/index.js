// 提供复用逻辑的函数
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// 数据懒加载函数
// target-dom对象
// apifn api函数
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  // stop停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersectings是否进入可视区
      if (isIntersecting) {
        stop()
        // 调用api函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  return result
}
