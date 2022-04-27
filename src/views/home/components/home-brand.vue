<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" :class="{ disabled: index === 0 }" href="javascript:;"
        class="iconfont icon-angle-left prev"></a>
      <a @click="toggle(1)" :class="{ disabled: index === 1 }" href="javascript:;"
        class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="box">
      <ul class="list" :style="{ transform: `translateX(${-index * 1240}px)` }">
        <li v-for="item in brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>

<script>
import { findBrand } from '@/api/home'
import { ref } from 'vue'
import HomePanel from './home-pannel'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup() {
    // 获取数据
    const brands = ref([])
    findBrand(10).then(data => {
      brands.value = data.result
    })
    // 切换效果,前提是只有0 1两页
    const index = ref(0)
    // 1点击上一页
    const toggle = (step) => {
      const newIndex = index.value + step
      if (newIndex < 0 || newIndex > 1) return
      index.value = newIndex
    }

    // 2点击下一页
    return { brands, toggle, index }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background: #f5f5f5
}

.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;

  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }

  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;

  .list {
    width: 200%;
    display: flex;
    transition: all 1s;

    li {
      margin-right: 10px;
      width: 240px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
