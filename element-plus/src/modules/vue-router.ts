import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router/auto' // if not found, should do `npm run dev` first
import { setupLayouts } from 'virtual:generated-layouts'
import { useAppStore } from '~/stores/app';
import { RouteRecordRaw } from 'vue-router';

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
    if (route.children) {
        for (let i = 0; i < route.children.length; i++) {
            route.children[i] = recursiveLayouts(route.children[i])
        }

        return route
    }

    return setupLayouts([route])[0]
}

//setupDataFetchingGuard
export const install: any = (app: App<Element>) => {
    // for fix vite-plugin-vue-layouts see: https://github.com/posva/unplugin-vue-router/issues/121
    const router = createRouter({
        history: createWebHashHistory(),
        extendRoutes: (routes) => {
            return routes.map((route) => {
                // My custom extendRoutes logic, that adds a meta field to force specific pages under
                // a given path to require auth.
                // if (route.path.includes('auth')) {
                //     route = {
                //         ...route,
                //         meta: {
                //             auth: false,
                //             layout: 'auth-layout',
                //             ...route.meta,
                //         },
                //     }
                // }

                // For each route, pass it to recursiveLayouts, which will apply layouts properly
                // (without duplicating or accidentally double-wrapping components).

                return recursiveLayouts(route)
            })
        }
    })

    router.beforeEach(async (to, from) => {

        const appStore = useAppStore()
        // 401 login 

        // 403 acl permission

        console.log(`route beforeEach:`, to)
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
