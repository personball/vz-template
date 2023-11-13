import { beforeEach, describe, expect, it, test } from 'vitest'
import { isGranted, isGrantedAnyOf } from './acl'
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
    authStore.init(
      ApplicationAuthConfigurationDto.fromJS({
        grantedPolicies: { p1: true, p3: false }
      })
    )
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

test(`isGrantedAnyOf empty policies to true`, () => {
  expect(isGrantedAnyOf()).toBe(true)
})

describe('isGrantedAnyOf with authStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const authStore = useAuthStore()
    authStore.init(
      ApplicationAuthConfigurationDto.fromJS({
        grantedPolicies: { p1: true, p3: false }
      })
    )
  })

  test.each([
    ['p1', true],
    ['p2', false],
    ['p3', false]
  ])('isGrantedAnyOf(%s) -> %s', (p, expected) => {
    expect(isGrantedAnyOf(p)).toBe(expected)
  })

  test.each([
    ['p1', 'p2', true],
    ['p1', 'p3', true],
    ['p2', 'p3', false]
  ])('isGrantedAnyOf(%s,%s) -> %s', (a, b, expected) => {
    expect(isGrantedAnyOf(a, b)).toBe(expected)
  })
})

describe('menuAclResolve with authStore setup {p1:true p3:false}', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const authStore = useAuthStore()
    authStore.init(
      ApplicationAuthConfigurationDto.fromJS({
        grantedPolicies: { p1: true, p3: false }
      })
    )
  })

  test.each([
    ['p1', true],
    ['p2', false],
    ['p3', false]
  ])('menuAclResolve(%s) -> %s', (p, expected) => {
    expect(menuAclResolve(p)).toBe(expected)
  })

  test.each([
    [['p1', 'p2'], false],
    [['p1', 'p3'], false],
    [['p2', 'p3'], false],
    [undefined, true],
    [{ anyOf: ['p1', 'p2'] }, true],
    [{ anyOf: ['p2', 'p3'] }, false],
    [{ anyOf: ['p2', 'p3'], allOf: ['p1'] }, false], // anyOf 优先
    [{ allOf: ['p1', 'p3'] }, false],
    [{ allOf: ['p1'] }, true]
  ])('menuAclResolve(%s) -> %s', (acl, expected) => {
    expect(menuAclResolve(acl)).toBe(expected)
  })
})

// pinia testing: https://pinia.vuejs.org/cookbook/testing.html
// mock pinia: https://github.com/vuejs/pinia/discussions/2092
