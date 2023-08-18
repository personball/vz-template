import { defineStore } from "pinia";
import { ApplicationConfigurationDto, AbpApplicationConfigurationServiceProxy, CurrentUserDto, MultiTenancyInfoDto, ClockDto, CurrentTenantDto, TimingDto } from '~/api/ServiceProxies';
import { useAuthStore } from "./auth";
import { useLocalizationStore } from "./localization";
import { useSettingStore } from "./setting";
import { useFeatureStore } from "./feature";
import { useGlobalFeatureStore } from "./globalFeature";

export const useAppStore = defineStore('app', {
    state: () => ({
        initialized: false,
        currentUser: undefined as CurrentUserDto | undefined,
        multiTenancy: undefined as MultiTenancyInfoDto | undefined,
        currentTenant: undefined as CurrentTenantDto | undefined,
        timing: undefined as TimingDto | undefined,
        clock: undefined as ClockDto | undefined
    }),
    actions: {
        async init() {
            let client = new AbpApplicationConfigurationServiceProxy();
            const res = await client.applicationConfiguration(false);
            console.log(res);

            if (res.auth) {
                const authStore = useAuthStore();
                authStore.init(res.auth);
            }

            if (res.localization) {
                const localizationStore = useLocalizationStore();
                localizationStore.init(res.localization);
            }

            if (res.setting) {
                const settingStore = useSettingStore();
                settingStore.init(res.setting);
            }

            if (res.features) {
                const featureStore = useFeatureStore();
                featureStore.init(res.features);
            }

            if (res.globalFeatures) {
                const globalFeatureStore = useGlobalFeatureStore();
                globalFeatureStore.init(res.globalFeatures);
            }

            res.globalFeatures && (console.log(' res.globalFeatures && (console.log): executed!'));

            res.currentUser && (this.currentUser = res.currentUser);
            res.multiTenancy && (this.multiTenancy = res.multiTenancy);
            res.currentTenant && (this.currentTenant = res.currentTenant);
            res.clock && (this.clock = res.clock);
            res.timing && (this.timing = res.timing);

            new Promise(f => setTimeout(() => this.initialized = true, 3000));
        }
    }
})