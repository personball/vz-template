<template>
    <ElDropdown trigger="click" @command="setLang">
        <el-icon class="el-icon v-icon cursor-pointer px-10px pt-1" :size=18>
            <IconLanguage></IconLanguage>
        </el-icon>
        <template #dropdown>
            <ElDropdownMenu>
                <ElDropdownItem v-for="item in localization?.languages" :key="item.cultureName" :command="item">
                    {{ item.displayName }}
                </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </ElDropdown>
</template>

<script lang="ts" setup>
import IconLanguage from '~icons/ion/language'

const localizationStore = useLocalizationStore()
const { localization } = storeToRefs(localizationStore)
const languageStore = useLanguageStore()
const { locale } = useI18n()

// const currentLocale = computed(() => localization.value?.languages?.filter(c => c.cultureName === languageStore.curLang).at(0))

const emitter = useEventBus()

async function setLang(lang: any) {
    languageStore.set(lang.cultureName)
    locale.value = LangMapI18N[lang.cultureName]

    emitter.emit('LanguageSwitch-Changed', true)
    // useAbpLocalizationAdapter mitt subscribe language-switch call appStore.init() and merge locale again
}
</script>