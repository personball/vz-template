import { useSessionStorage, useLocalStorage } from "@vueuse/core";
import dayjs from "dayjs";

interface IToken {
    token: string,
    expiredIn: number
}

/**
 * @deprecated use oidc `useOidcStore()` instead.
 */
export function useTokenService() {
    const tokenKey = '__vz_token'
    const local = useLocalStorage(tokenKey, { token: '', expiredIn: 0 } as IToken);
    const session = useSessionStorage(tokenKey, { token: '', expiredIn: 0 } as IToken);

    function setToken(value: string, expiredIn: number, rememberMe: boolean = false) {
        let expireTime = dayjs().add(expiredIn, 'second')
        // set 的时候，尽量保证只存一种，清除另一种
        if (rememberMe) {
            session.value = null
            local.value = { token: value, expiredIn: expireTime.unix() }
        } else {
            local.value = null
            session.value = { token: value, expiredIn: expireTime.unix() }
        }
    }

    function getToken(): string | null {
        // 优先读 sessionStorage，没有再尝试读 localStorage
        let val = session.value;
        if (val == null || val.token === '') {
            val = local.value
        }

        // localStorage 还没
        if (val == null || val.token === '') {
            return null
            // 重定向登录交给外面处理，避免部分api无token时
        }

        // 如果过期，则清除
        const now = dayjs().unix()
        if (now >= val.expiredIn) {
            session.value = null
            local.value = null

            return null
            // 重定向登录交给外面处理，避免部分api无token时
        }

        return val.token
    }

    return { setToken, getToken }
}

// https://github.com/sssx-li/vue-vite-template/blob/master/src/hooks/useLocalCache.ts 