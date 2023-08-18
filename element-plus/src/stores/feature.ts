import { defineStore } from "pinia";
import { ApplicationFeatureConfigurationDto } from '~/api/ServiceProxies';

export const useFeatureStore = defineStore('feature', {
    state: () => ({
        feature: undefined as ApplicationFeatureConfigurationDto | undefined
    }),
    actions: {
        init(value: ApplicationFeatureConfigurationDto) {
            this.feature = value;
        }
    }
})