import { useAuthStore } from "~/stores/auth"
// pinia getter 带入参的时候（return function）没有明显优势，无需考虑将这些方法整合进 pinia store 定义中
export function isGranted(...policies: string[]): boolean {

    if (policies.length === 0) {
        return true
    }

    const authStore = useAuthStore()

    return policies.map(p => authStore.auth?.grantedPolicies == null ? false : (authStore.auth?.grantedPolicies[p] || false))
        .reduce((prev, cur) => prev && cur)
}

export function isGrantedAnyOf(...policies: string[]): boolean {

    if (policies.length === 0) {
        return true
    }

    const authStore = useAuthStore()

    return policies.map(p => authStore.auth?.grantedPolicies == null ? false : (authStore.auth?.grantedPolicies[p] || false))
        .reduce((prev, cur) => prev || cur)
}

export function menuAclResolve(acl: { anyOf?: string[] | undefined, allOf?: string[] | undefined } | string[] | string | undefined): boolean {

    if (!acl) {
        return true
    }

    if (Array.isArray(acl)) {
        return isGranted(...acl)
    }

    if (typeof acl === "object") {
        if (acl.anyOf) {
            return isGrantedAnyOf(...acl.anyOf)
        }

        if (acl.allOf) {
            return isGranted(...acl.allOf)
        }
    }

    if (typeof acl === 'string') {
        return isGranted(acl)
    }

    // not supported
    return false
}