import { defineStore } from 'pinia'
import { ApplicationAuthConfigurationDto } from '~/api/ServiceProxies'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: undefined as ApplicationAuthConfigurationDto | undefined
  }),
  actions: {
    init(value: ApplicationAuthConfigurationDto) {
      this.auth = value
      console.log('got me: auth')
    }
  }
})
