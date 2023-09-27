<template>
    <el-menu-item v-if="!menu.children" :index="menu.url">
        <el-icon v-if="menu.icon" size="16">
            <component :is="menu.icon"  class="icon" />
        </el-icon>
        <span>{{ menu.title }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="menu.url">
        <template #title>
            <el-icon v-if="menu.icon" size="16">
                <component :is="menu.icon" class="icon" />
            </el-icon>
            <span>{{ menu.title }}</span>
        </template>
        <MenuItem v-for="item in menu.children" :menu="item">
        </MenuItem>
    </el-sub-menu>
</template>

<script lang="ts" setup>

const props = defineProps<{
    menu: any
}>()

</script>