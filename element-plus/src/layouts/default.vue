<template>
    <BaseHeader />
    <div class="flex main-container">
        <BaseSide v-if="initialized" />
        <div w="full" py="4">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "../stores/app";

const appStore = useAppStore();
const { initialized } = storeToRefs(appStore);
</script>

<style>
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>