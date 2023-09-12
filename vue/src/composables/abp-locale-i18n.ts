
export const LangMapAbp: { [key: string]: string; } = {
    'zh': 'zh-Hans',
    'zh-CN': 'zh-Hans',
    'en-US': 'en'
}

export const LangMapI18N: { [key: string]: string; } = {
    'zh-Hans': 'zh-CN',
    'en': 'en'
}



function reMerge(messages: any, mergeLocaleMessage: any) {
    // merge abp localization into vue-i18n

    console.log('layout:messages1', JSON.stringify(messages.value))

    const localizationStore = useLocalizationStore();
    if (localizationStore.localization !== null && localizationStore.localization!.currentCulture != null) {
        console.log('layout:localizationStore.localization', localizationStore.localization);

        // abp adapt Resource::Key
        let msg: any = {}
        for (let key in localizationStore.localization?.values) {
            for (let subk in localizationStore.localization?.values[key]) {
                let p = key + '::' + subk
                msg[p] = localizationStore.localization?.values[key][subk]
            }
        }

        mergeLocaleMessage(LangMapI18N[localizationStore.localization!.currentCulture!.cultureName!], msg)
    }

    console.log('layout:messages2', messages.value)
}

export function useAbpLocalizationAdapter() {
    const { messages, mergeLocaleMessage } = useI18n()
    reMerge(messages, mergeLocaleMessage)
    return { reMerge, messages, mergeLocaleMessage }
}