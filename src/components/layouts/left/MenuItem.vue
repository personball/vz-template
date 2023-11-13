<template>
    <el-menu-item v-if="!menu.children && acl" :index="menu.url">
        <el-icon v-if="menu.icon" size="16">
            <component :is="menu.icon" class="icon" />
        </el-icon>
        <span class="v-menu__title" v-t="menu.title"></span>
    </el-menu-item>
    <el-sub-menu v-if="menu.children && acl" :index="menu.url">
        <template #title>
            <el-icon v-if="menu.icon" size="16">
                <component :is="menu.icon" class="icon" />
            </el-icon>
            <span class="v-menu__title" v-t="menu.title"></span>
        </template>
        <MenuItem v-for="(item, index) in menu.children" :menu="item" :key="index">
        </MenuItem>
    </el-sub-menu>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const props = defineProps<{
    menu: any
}>()

const acl = computed(() => menuAclResolve(props.menu.acl))

</script>