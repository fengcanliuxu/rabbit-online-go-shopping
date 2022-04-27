// 扩展vue原有功能：全局组件,自定义指令，挂载原型方法,注意：没有过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，在vue基础之上进行扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，在app基础之上进行扩展
import XtxSkeleton from './xtx-skeleton'
import Xtxcarousel from './xtx-carousel'
import XtxMore from './xtx-more'

export default {
  install(app) {
    // 在app上进行扩展，app提供component directive
    // 如果要挂载原型，需要使用config.globalProperties方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(Xtxcarousel.name, Xtxcarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
