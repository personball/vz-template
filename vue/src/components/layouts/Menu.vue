<template>
    <el-menu class="el-menu-vertical-demo" :mode="mode" :default-active="activePath" :router="true" :collapse="isCollapse">
        <MenuItem v-for="menu in menus" :key="menu.url" :menu="menu" />
    </el-menu>
</template>

<script lang="ts" setup>
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'
import IconSetting from '~icons/ep/setting'
import IconDashboard from '~icons/ant-design/dashboard-outlined'
import IconUsers from '~icons/mdi/account-group'
import IconRoles from '~icons/carbon/user-role'
import IconLogging from '~icons/carbon/ibm-cloud-logging'
const { t } = useI18n()

const menus = ref(
    [{
        icon: markRaw(IconDashboard),
        title: t('menu.dashboard'),
        url: '/'
    }, {
        icon: markRaw(IconSetting),
        title: t('menu.sys'),
        url: '/sys/',
        children: [{
            icon: markRaw(IconUsers),
            title: t('menu.users'),
            url: '/sys/users',
        }, {
            icon: markRaw(IconRoles),
            title: t('menu.roles'),
            url: '/sys/roles',
        }, {
            icon: markRaw(IconSetting),
            title: t('menu.settings'),
            url: '/sys/settings',
        }, {
            icon: markRaw(IconLogging),
            title: t('menu.logs'),
            url: '/sys/logs',
        }]
    }])

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