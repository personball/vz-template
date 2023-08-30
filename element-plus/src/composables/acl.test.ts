import { beforeEach, describe, expect, it, test } from 'vitest'
import { isGranted } from './acl'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { ApplicationAuthConfigurationDto } from '~/api/ServiceProxies'

test(`empty policies to true`, () => {
    expect(isGranted()).toBe(true)
})
// https://cn.vitest.dev/api/
describe('with authStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())

        const authStore = useAuthStore()
        authStore.init(ApplicationAuthConfigurationDto.fromJS({ grantedPolicies: { "p1": true, "p3": false } }))
    })

    it('allowed when p1 is granted', () => {
        expect(isGranted('p1')).toBe(true)
    })

    it('forbidden when p2 undefined', () => {
        expect(isGranted('p2')).toBe(false)
    })

    it('forbidden when p1 and p2 all granted', () => {
        expect(isGranted('p1', 'p2')).toBe(false)
    })

    it('forbidden when p3 false', () => {
        expect(isGranted('p3')).toBe(false)
    })
})

// pinia testing: https://pinia.vuejs.org/cookbook/testing.html
// mock pinia: https://github.com/vuejs/pinia/discussions/2092