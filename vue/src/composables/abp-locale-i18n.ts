
export function useAbpLocalizationAdapter() {

    // merge abp localization into vue-i18n
    const { messages, mergeLocaleMessage } = useI18n()
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

        mergeLocaleMessage(localizationStore.localization!.currentCulture!.cultureName!, msg)
    }

    console.log('layout:messages2', messages.value)
}