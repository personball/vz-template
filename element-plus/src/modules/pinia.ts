import { createPinia } from 'pinia'
import { App } from 'vue';

// Setup Pinia
// https://pinia.vuejs.org/
export const install: any = (app: App<Element>) => {
    const pinia = createPinia()
    app.use(pinia)

    console.log('pinia loaded!');
}