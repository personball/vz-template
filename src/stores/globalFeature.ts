import { defineStore } from 'pinia'
import { ApplicationGlobalFeatureConfigurationDto } from '~/api/ServiceProxies'

export const useGlobalFeatureStore = defineStore('globalFeature', {
  state: () => ({
    globalFeature: undefined as
      | ApplicationGlobalFeatureConfigurationDto
      | undefined
  }),
  actions: {
    init(value?: ApplicationGlobalFeatureConfigurationDto) {
      this.globalFeature = value
      console.log('got me: globalFeature')
    }
  }
})
