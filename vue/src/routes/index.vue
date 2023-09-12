<template>
  <div>
    home {{ t('message.hello') }}, 401: {{ t('AbpPermissionManagement::401Message') }}
    <p v-t="{ path: 'message.hello', locale: 'en' }"></p>
    <p v-t="{ path: 'message.hello' }"></p>
    <p v-t="'message.hello'"></p>
    <p v-t="'AbpPermissionManagement::401Message'"></p>

    <el-color-picker v-model="color2" />
  </div>
  <!-- <HelloWorld :msg="`multiTenancy.Enabled: ${multiTenancy?.isEnabled}`" /> -->
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const { t } = useI18n()
const appStore = useAppStore();
const { multiTenancy } = storeToRefs(appStore);

const color2 = ref()
</script>

<route lang="yaml">
meta:
  layout: default
  # allowAnonymous: true
</route>