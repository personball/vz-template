<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide v-if="initialized" />
      <div w="full" py="4">
        <router-link to="/">Return</router-link>
        <router-link to="/home">GO TO HOME</router-link>
        <router-view></router-view>
        <HelloWorld :msg="`multiTenancy.Enabled: ${multiTenancy?.isEnabled}`" />
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "./stores/app";

const appStore = useAppStore();
const { initialized, multiTenancy } = storeToRefs(appStore);

console.log('say app');

// console.log(route.fullPath)

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
