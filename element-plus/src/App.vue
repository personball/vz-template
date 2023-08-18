<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide />
      <div w="full" py="4">
        <HelloWorld :msg="`Hello clock.kind: ${conf?.clock?.kind}`" />
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "./stores/app";

const appStore = useAppStore();
const { conf } = storeToRefs(appStore);

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
