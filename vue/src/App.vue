<template>
  <el-config-provider namespace="el" size="default" :locale="locale" :message="{ max: 1 }">
    <router-view>
    </router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const langStore = useLanguageStore()

const locale = computed(() => langStore.curLang === 'en' ? en : zhCn)

console.log('say app');

</script>

<style>
/* #app {
  color: var(--el-text-color-primary);
} */
</style>
