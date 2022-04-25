<template>
  <!-- 顶部通栏 -->
  <nav></nav>
  <!-- 头部组件 -->
  <header></header>
  <!-- 内容容器 -->
  <div class="main">
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: 'LayOut'
}
</script>
