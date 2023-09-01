<template>
  <BaseHeader />
  <div class="flex main-container">
    <BaseSide v-if="initialized" />
    <div w="full" py="4">
      <router-link to="/">Return</router-link>
      <router-link to="/home">GO TO HOME</router-link>

      <HelloWorld v-if="isGrantedAnyOf('p1', 'p3')" :msg="`multiTenancy.Enabled: ${multiTenancy?.isEnabled}`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isGrantedAnyOf } from '~/composables/acl';
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";

const appStore = useAppStore();
const { initialized, multiTenancy } = storeToRefs(appStore);
</script>

<route lang="yaml">
meta:
  layout: default
  requireAuth: true
</route>