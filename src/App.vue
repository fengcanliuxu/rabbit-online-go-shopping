<template>
  <!-- vue3.0可以是代码片段，可以没有根标签 -->
  <div>
    app
    <!-- //使用根模块 -->
    <p>{{ $store.state.username }}</p>
    <!-- 使用根模块getter属性 -->
    <p>{{ $store.getters['newName'] }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
  }
}
</script>

<style lang="less"></style>
