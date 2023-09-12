import { usePreferredLanguages } from "@vueuse/core";
import { defineStore } from "pinia";

const defaultLang = import.meta.env.VITE_DEFAULT_LANG

export const useLanguageStore = defineStore('language', {
    state: () => ({
        lang: undefined as string | undefined
    }),
    getters: {
        curLang: (state) => {
            if (state.lang) {
                return state.lang
            } else {
                // TODO: user selected lang store to local storage
                const userLangs = usePreferredLanguages()
                // PreferredLanguages not in localization.languages?
                const val = userLangs.value.map(m => Object.hasOwn(LangMapAbp, m) ? LangMapAbp[m] : undefined).reduce((prev, cur) => prev || cur)

                console.log(val)
                return val ?? defaultLang
            }
        }
    },
    actions: {
        set(value: string) {
            this.lang = value;
            console.log(`init lang: `, value);
        }
    }
})