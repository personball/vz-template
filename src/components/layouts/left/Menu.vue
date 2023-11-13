<template>
    <div :class="`h-[100%] overflow-hidden flex-col bg-[var(--left-menu-bg-color)] ${collapse ? 'w-[var(--left-menu-min-width)]' : 'w-[var(--left-menu-max-width)]'} !h-[calc(100%-var(--logo-height))]`"
        style="transition: width var(--transition-time-02);">
        <ElScrollbar>
            <el-menu :uniqueOpened="true" style="border-right:none;" backgroundColor="var(--left-menu-bg-color)"
                textColor="var(--left-menu-text-color)" activeTextColor="var(--left-menu-text-active-color)" :mode="mode"
                :default-active="activePath" :router="true" :collapse="collapse">
                <MenuItem v-for="(menu, index) in menus" :key="index" :menu="menu">
                </MenuItem>
            </el-menu>
        </ElScrollbar>
    </div>
</template>

<script lang="ts" setup>

import { useMenus } from '~/menu'

const appStore = useAppStore()

const { menus } = useMenus()

const route = useRoute()
const activePath = computed(() => route.path)
const collapse = computed(() => appStore.getCollapse)

const props = withDefaults(defineProps<{
    mode?: 'horizontal' | 'vertical'
}>(), {
    mode: () => 'vertical'
})

</script>