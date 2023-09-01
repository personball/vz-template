import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto' // if not found, should do `npm run dev` first
import { useAppStore } from '~/stores/app';
//setupDataFetchingGuard
export const install: any = (app: App<Element>) => {
    const router = createRouter({
        history: createWebHistory()
    })

    router.beforeEach(async (to, from) => {

        const appStore = useAppStore()
        // 401 login 

        // 403 acl permission


        if (
            // 检查用户是否已登录
            !appStore.currentUser?.isAuthenticated &&
            // ❗️ 避免无限重定向
            to.name !== '/login/'
        ) {
            // 将用户重定向到登录页面
            return {
                name: '/login/',
                query: {
                    redirect: to.fullPath
                },
                replace: true
            }
        }
    })

    app.use(router)

    console.log(router.getRoutes())

    router.push('/home')

    console.log('vue-router/auto loaded!');
}
