// 提供首页相关api参数
import request from '@/utils/request'

/*
limit--品牌个数
return promise
*/
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
