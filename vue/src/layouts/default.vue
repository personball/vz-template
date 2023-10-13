<template>
    <section class="v-layout v-layout__classic w-[100%] h-[100%]">
        <div class="absolute top-0 left-0 h-full layout-border__right">
            <Logo class="bg-[var(--left-menu-bg-color)] relative w-[var(--left-menu-max-width)]"
                style="transition: all var(--transition-time-02);"></Logo>
            <Menu></Menu>
        </div>
        <div class="v-layout-content absolute top-0 h-[100%] w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]"
            style="transition: all var(--transition-time-02);">
            <ElScrollbar
                class="el-scrollbar v-layout-content-scrollbar !h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]">
                <div>ttt
                    <!-- <ToolHeader class="layout-border__bottom"></ToolHeader>
                    <TagsView class="layout-border__bottom layout-border__top"></TagsView> -->
                </div>
                <!-- <AppView></AppView> -->
            </ElScrollbar>
        </div>
    </section>

    <!-- <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <BaseSide />
            </el-aside>
            <el-container>
                <el-header>
                    <BaseHeader />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div> -->
</template>

<script lang="ts" setup>
const { reMerge, messages, mergeLocaleMessage } = useAbpLocalizationAdapter();

const appStore = useAppStore();
const { initialized } = storeToRefs(appStore);

// settings
const settingStore = useSettingStore();
console.log('Abp.Identity.Lockout.LockoutDuration:', settingStore.getVal('Abp.Identity.Lockout.LockoutDuration'))
console.log('Abp.Identity.Password.RequireLowercase', settingStore.enabled('Abp.Identity.Password.RequireLowercase'))

// features
const featureStore = useFeatureStore()
console.log('SettingManagement.AllowChangingEmailSettings', featureStore.getVal('SettingManagement.AllowChangingEmailSettings'))
console.log('SettingManagement.Enable', featureStore.enabled('SettingManagement.Enable'))


const reMergeLocales = () => {
    appStore.init().then(() => {
        reMerge(messages, mergeLocaleMessage)
        console.log('emit!')
    })
}

const emitter = useEventBus()

onMounted(() => {
    emitter.on('LanguageSwitch-Changed', reMergeLocales)
})

onUnmounted(() => {
    emitter.off('LanguageSwitch-Changed')
})
</script>

<style>
.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>