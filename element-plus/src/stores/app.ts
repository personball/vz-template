import { defineStore } from "pinia";
import { ApplicationConfigurationDto, AbpApplicationConfigurationServiceProxy } from '~/api/ServiceProxies';

export const useAppStore = defineStore('app', {
    state: () => ({
        initialized: false,
        conf: undefined as ApplicationConfigurationDto | undefined
    }),
    actions: {
        async init() {
            let client = new AbpApplicationConfigurationServiceProxy();
            this.conf = await client.applicationConfiguration(false);
            console.log(this.conf);
            this.initialized = true;
        }
    }
})