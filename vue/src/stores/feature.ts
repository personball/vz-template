import { defineStore } from "pinia";
import { ApplicationFeatureConfigurationDto } from '~/api/ServiceProxies';

export const useFeatureStore = defineStore('feature', {
    state: () => ({
        feature: undefined as ApplicationFeatureConfigurationDto | undefined
    }),
    getters: {
        getVal: (state) => {
            return (name: string): undefined | string => {
                if (state.feature && state.feature.values && state.feature.values[name]) {
                    return state.feature.values[name]
                }

                return undefined;
            }
        },
        enabled: (state) => {
            return (name: string): undefined | boolean => {
                if (state.feature && state.feature.values && state.feature.values[name]) {
                    return state.feature.values[name].toLowerCase() === "true"
                }

                return undefined
            }
        }
    },
    actions: {
        init(value: ApplicationFeatureConfigurationDto) {
            this.feature = value;
            console.log('got me: feature');
        }
    }
})