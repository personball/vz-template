<template>
    <div class="common-layout">
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
    </div>
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