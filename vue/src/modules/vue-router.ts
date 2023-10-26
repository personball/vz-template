import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router/auto' // if not found, should do `npm run dev` first
import { setupLayouts } from 'virtual:generated-layouts'
import { useAppStore } from '~/stores/app';
import { RouteRecordRaw } from 'vue-router';
import { ElLoading } from 'element-plus/es'

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
        // 401 login 
        // 403 acl permission
        // console.log(`route beforeEach:`, to)

        if (to.meta?.allowAnonymous) {
            return true
        }

        const appStore = useAppStore()
        console.log('to.fullPath:',to)
        if (!appStore.currentUser?.isAuthenticated) {
            // 将用户重定向到登录页面
            const { autoAuthenticate } = useAuth()
            const loading = ElLoading.service({
                lock: true,
                text: '认证中...',
                background: 'rgba(128, 128, 128, 0.5)'
            });
            await autoAuthenticate('/#' + to.fullPath);
            loading.close();
        }
    })

    app.use(router)

    console.log(router.getRoutes())

    console.log('vue-router/auto loaded!');
}
