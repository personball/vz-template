import { createRouter, createWebHistory } from 'vue-router/auto' // if not found, should do `npm run dev` first

export const install: any = (app: any) => {
    createRouter({
        history: createWebHistory()
    })
}