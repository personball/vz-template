<template>
    <el-sub-menu index="lang">
        <template #title>{{ currentLocale?.displayName }}</template>
        <el-menu-item v-for="lang in localization?.languages" :key="lang.cultureName" @click="setLang(lang)">{{
            lang.displayName }}</el-menu-item>
    </el-sub-menu>
</template>

<script lang="ts" setup>
const localizationStore = useLocalizationStore()
const { localization } = storeToRefs(localizationStore)
const languageStore = useLanguageStore()
const { locale } = useI18n()

const currentLocale = computed(() => localization.value?.languages?.filter(c => c.cultureName === languageStore.curLang).at(0))

const emitter = useEventBus()

async function setLang(lang: any) {
    languageStore.set(lang.cultureName)
    locale.value = LangMapI18N[lang.cultureName]

    emitter.emit('LanguageSwitch-Changed', true)
    // useAbpLocalizationAdapter mitt subscribe language-switch call appStore.init() and merge locale again
}
</script>