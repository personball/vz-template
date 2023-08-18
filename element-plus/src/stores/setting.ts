import { defineStore } from "pinia";
import { ApplicationSettingConfigurationDto } from '~/api/ServiceProxies';

export const useSettingStore = defineStore('setting', {
    state: () => ({
        setting: undefined as ApplicationSettingConfigurationDto | undefined
    }),
    actions: {
        init(value: ApplicationSettingConfigurationDto) {
            this.setting = value;
        }
    }
})