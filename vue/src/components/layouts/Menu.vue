<template>
    <div class="h-[100%] overflow-hidden flex-col bg-[var(--left-menu-bg-color)] w-[var(--left-menu-max-width)]">
        <ElScrollbar>
            <el-menu backgroundColor="var(--left-menu-bg-color)" textColor="var(--left-menu-text-color)"
                activeTextColor="var(--left-menu-text-active-color)" :mode="mode" :default-active="activePath"
                :router="true" :collapse="isCollapse">
                <MenuItem v-for="(menu, index) in menus" :key="index" :menu="menu">
                </MenuItem>
            </el-menu>
        </ElScrollbar>
    </div>
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