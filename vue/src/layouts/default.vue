<template>
    <BaseHeader />
    <div class="flex main-container">
        <BaseSide v-if="initialized" />
        <div w="full" py="4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
useAbpLocalizationAdapter();

const appStore = useAppStore();
const { initialized } = storeToRefs(appStore);

// settings
const settingStore = useSettingStore();
console.log('Abp.Identity.Lockout.LockoutDuration:', settingStore.getVal('Abp.Identity.Lockout.LockoutDuration'))
console.log('Abp.Identity.Password.RequireLowercase', settingStore.enabled('Abp.Identity.Password.RequireLowercase'))

// features
const featureStore = useFeatureStore()
console.log('SettingManagement.AllowChangingEmailSettings',featureStore.getVal('SettingManagement.AllowChangingEmailSettings'))
console.log('SettingManagement.Enable',featureStore.enabled('SettingManagement.Enable'))

</script>

<style>
.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>