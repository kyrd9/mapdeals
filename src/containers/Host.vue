<template>
<div id="root">
  <transition name="route" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.route-enter-active, .route-leave-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 120ms;
  transition-property: opacity, transform;
}
.route-enter, .route-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
