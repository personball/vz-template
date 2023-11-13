import { defineStore } from 'pinia'
import { ApplicationLocalizationConfigurationDto } from '~/api/ServiceProxies'

export const useLocalizationStore = defineStore('localization', {
  state: () => ({
    localization: undefined as
      | ApplicationLocalizationConfigurationDto
      | undefined
  }),
  actions: {
    init(value: ApplicationLocalizationConfigurationDto) {
      this.localization = value
      console.log(`got me: localization`, value)
      // will merge to vue-i18n locales through layout component
    }
  }
})
