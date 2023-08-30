import { useAuthStore } from "~/stores/auth"

export function isGranted(...policies: string[]): boolean {

    if (policies.length === 0) {
        return true
    }

    const authStore = useAuthStore()

    return policies.map(p => authStore.auth?.grantedPolicies == null ? false : (authStore.auth?.grantedPolicies[p] || false))
        .reduce((prev, cur) => prev && cur)
}