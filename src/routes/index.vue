<template>
  <ElRow :gutter="20" justify="space-between">
    <ElCol :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated>
          <!-- <Echart :options="pieOptionsData" :height="300" /> -->
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :xl="14" :lg="14" :md="24" :sm="24" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated>
          <!-- <Echart :options="barOptionsData" :height="300" /> -->
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :span="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <!-- <Echart :options="lineOptionsData" :height="350" /> -->
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
  <!-- <div>
    home {{ t('message.hello') }}, 401: {{ t('AbpPermissionManagement::401Message') }}
    <p v-t="{ path: 'message.hello', locale: 'en' }"></p>
    <p v-t="{ path: 'message.hello' }"></p>
    <p v-t="'message.hello'"></p>
    <p v-t="'AbpPermissionManagement::401Message'"></p>

    <el-color-picker v-model="color2" />
  </div> -->
  <!-- <HelloWorld :msg="`multiTenancy.Enabled: ${multiTenancy?.isEnabled}`" /> -->
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'
const { t } = useI18n()
const appStore = useAppStore()
const { multiTenancy } = storeToRefs(appStore)

const color2 = ref()
const loading = ref(true)
</script>

<route lang="yaml">
meta:
  layout: default
  # allowAnonymous: true
</route>
