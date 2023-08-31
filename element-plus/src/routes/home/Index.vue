<template>
    <div>home</div>
    <div v-acl="'p1'">your are admin</div>
    <div v-if="!isGrantedAnyOf('p1')"> you are not admin</div>
</template>

<script lang="ts" setup>
import { isGrantedAnyOf } from '~/composables/acl';
</script>