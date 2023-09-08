<template>
  <div>
    home
  </div>
  <!-- <HelloWorld :msg="`multiTenancy.Enabled: ${multiTenancy?.isEnabled}`" /> -->
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";

const appStore = useAppStore();
const {  multiTenancy } = storeToRefs(appStore);
</script>

<route lang="yaml">
meta:
  layout: default
  # allowAnonymous: true
</route>