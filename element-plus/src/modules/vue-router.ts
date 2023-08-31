import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto' // if not found, should do `npm run dev` first
//setupDataFetchingGuard
export const install: any = (app: App<Element>) => {
    const router = createRouter({
        history: createWebHistory()
    })

    app.use(router)

    console.log('vue-router/auto loaded!');
}