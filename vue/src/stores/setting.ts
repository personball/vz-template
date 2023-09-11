import { defineStore } from "pinia";
import { ApplicationSettingConfigurationDto } from '~/api/ServiceProxies';

export const useSettingStore = defineStore('setting', {
    state: () => ({
        setting: undefined as ApplicationSettingConfigurationDto | undefined
    }),
    getters: {
        getVal: (state) => {
            return (name: string): undefined | string => {
                if (state.setting && state.setting.values && state.setting.values[name]) {
                    return state.setting.values[name]
                }

                return undefined;
            }
        },
        enabled: (state) => {
            return (name: string): undefined | boolean => {
                if (state.setting && state.setting.values && state.setting.values[name]) {
                    return state.setting.values[name].toLowerCase() === "true"
                }

                return undefined
            }
        }
    },
    actions: {
        init(value: ApplicationSettingConfigurationDto) {
            this.setting = value;
            console.log('got me: setting');
        }
    }
})