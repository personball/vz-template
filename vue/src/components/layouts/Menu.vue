<template>
    <el-menu class="el-menu-vertical-demo" :mode="mode" :default-active="activePath" :router="true" :collapse="isCollapse">
        <MenuItem v-for="(menu, index) in menus" :key="index" :menu="menu" />
    </el-menu>
</template>

<script lang="ts" setup>

import { useMenus } from '~/menu'

const { menus } = useMenus()

const route = useRoute()
const activePath = computed(() => route.path)
const isCollapse = computed(() => props.collapse)

const props = withDefaults(defineProps<{
    collapse?: boolean,
    mode?: 'horizontal' | 'vertical'
}>(), {
    collapse: () => false,
    mode: () => 'vertical'
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};

</script>