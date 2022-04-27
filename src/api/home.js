// 提供首页相关api参数
import request from '@/utils/request'

/*
limit--品牌个数
return promise
*/
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
// 获取广告轮播图区域
export const findBanner = () => {
  return request('/home/banner', 'get')
}

// 新鲜好物
export const findNew = () => {
  return request('/home/new', 'get')
}

// 人气推荐
export const findHot = () => {
  return request('/home/hot', 'get')
}
