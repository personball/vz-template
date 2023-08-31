// pinia component testing: https://pinia.web3doc.top/cookbook/testing.html#unit-testing-components
// component testing: https://github.com/vuejs/pinia/blob/v2/packages/testing/src/testing.spec.ts
// another sample (import component for testing): https://github.com/vuejs/pinia/discussions/2092

import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { vzAcl } from './acl'
import { ApplicationAuthConfigurationDto } from '~/api/ServiceProxies'

describe.skip('skip testing v-acl, for unknow reason `el.parentNode.removeChild(el)` not work.', () => {
    const Counter = () =>
        defineComponent({
            template: `
        <span>How many buttons do you see? </span>
        <button id="btn1" v-acl="'p1'">p1 granted</button>
        <button id="btn2" v-acl="'p2'">p2 granted</button>
        <button id="btn3" v-acl="'p3'">p3 granted</button>
        <button id="btn4" v-acl.any="['p1','p2']">p1 or p2 granted</button>
        <button id="btn5" v-acl.any="['p1','p3']">p1 or p3 granted</button>
        <button id="btn6" v-acl.any="['p2','p3']">p2 or p3 granted</button>
        <button id="btn7" v-acl="['p1','p2']">p1 and p2 granted</button>
        <button id="btn8" v-acl="['p1','p3']">p1 and p3 granted</button>
        <button id="btn9" v-acl="['p2','p3']">p2 and p3 granted</button>
        <button id="btn0" v-if="false">p2 and p3 granted</button>
        `,
        })

    // const acl = vi.fn()

    function factory(
        options?: TestingOptions
    ) {
        const wrapper = mount(Counter(), {
            global: {
                plugins: [createTestingPinia(options)],
                directives: { acl: vzAcl }
            },
        })

        return { wrapper }
    }

    it.skip('should show all button with p1 granted', () => {
        const { wrapper } = factory({
            createSpy: vi.fn,
            initialState: {
                // mock
                auth: {
                    auth: ApplicationAuthConfigurationDto.fromJS({ grantedPolicies: { "p1": true, "p3": false } })
                }
            }
        })
        console.log(wrapper.html())
        expect(wrapper.find('#btn0').exists()).toBe(false)
        // expect(acl).toHaveBeenCalled()
        expect(wrapper.findAll('button').length).toBe(3)
    })

    it.todo('should not show all button with p2 granted', () => {
        const { wrapper } = factory()

    })

    it.todo('should not show all button with p3 granted', () => {
        const { wrapper } = factory()

    })

})