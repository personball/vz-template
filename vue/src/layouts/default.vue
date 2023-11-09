<template>
    <section class="v-layout v-layout__classic w-[100%] h-[100%]">
        <div class="absolute top-0 left-0 h-full layout-border__right">
            <Logo
                :class="`bg-[var(--left-menu-bg-color)] relative ${collapse ? 'w-[var(--left-menu-min-width)]' : 'w-[var(--left-menu-max-width)]'}`"
                style="transition: all var(--transition-time-02);"></Logo>
            <Menu></Menu>
        </div>
        <div :class="`v-layout-content absolute top-0 h-[100%] ${collapse ? 'w-[calc(100%-var(--left-menu-min-width' : 'w-[calc(100%-var(--left-menu-max-width'}))] ${collapse ? 'left-[var(--left-menu-min-width)]' : 'left-[var(--left-menu-max-width)]'}`"
            style="transition: all var(--transition-time-02);">
            <ElScrollbar
                class="el-scrollbar v-layout-content-scrollbar !h-[calc(100%-var(--top-tool-height))] mt-[calc(var(--top-tool-height))]">
                <div :class="`fixed top-0 left-0 z-10 ${collapse ? 'w-[calc(100%-var(--left-menu-min-width))]' : 'w-[calc(100%-var(--left-menu-max-width))]'} ${collapse ? '!left-[var(--left-menu-min-width)]' : '!left-[var(--left-menu-max-width)]'}`"
                    style="transition: all var(--transition-time-02);">
                    <ToolHeader class="layout-border__bottom"></ToolHeader>
                    <!-- <TagsView class="layout-border__bottom layout-border__top"></TagsView> -->
                </div>
                <section
                    class="p-[var(--app-content-padding)] w-[calc(100%-var(--app-content-padding)-var(--app-content-padding))] bg-[var(--app-content-bg-color)] dark:bg-[var(--el-bg-color)] !min-h-[calc(100%-var(--app-content-padding)-var(--app-content-padding)-var(--app-footer-height))]">
                    <router-view v-slot="{ Component }">
                        <Transition name="fade">
                            <KeepAlive>
                                <Suspense>
                                    <component :is="Component"></component>
                                </Suspense>
                            </KeepAlive>
                        </Transition>
                    </router-view>
                </section>
                <div
                    class="v-footer text-center text-[var(--el-text-color-placeholder)] bg-[var(--app-content-bg-color)] h-[var(--app-footer-height)] leading-[var(--app-footer-height)] dark:bg-[var(--el-bg-color)]">
                    Copyright&copy;2023-present VZeroAdmin</div>
            </ElScrollbar>
        </div>
    </section>
</template>

<script lang="ts" setup>

const { reMerge, messages, mergeLocaleMessage } = useAbpLocalizationAdapter();

const appStore = useAppStore();
const collapse = computed(() => appStore.getCollapse)
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
    height: calc(100vh - var(--el-menu-item-height) - 3px);
}

.el-scrollbar__view {
    height: 100% !important;
}
</style>