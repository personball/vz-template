<template>
  <el-scrollbar>
    <Menu :collapse="isCollapse"></Menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);


</script>
