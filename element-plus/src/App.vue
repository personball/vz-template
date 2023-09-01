<template>
  <el-config-provider namespace="ep">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>

console.log('say app');

</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
