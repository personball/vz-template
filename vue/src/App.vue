<template>
  <el-config-provider namespace="ep" :locale="locale">
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
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
</style>
