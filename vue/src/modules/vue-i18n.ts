import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import en from '~/locales/en.json';
import zhCN from '~/locales/zh_CN.json';
// lazy load by vite per locale: https://github.com/intlify/vue-i18n-next/blob/master/examples/lazy-loading/vite/src/i18n.ts

// Type-define 'en' as the master schema for the resource
type MessageSchema = typeof en

// 先加载本项目的静态资源, app init 时再补充后端返回的资源
const i18n = createI18n<[MessageSchema], 'en' | 'zh-CN'>({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'zh-CN', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        'en': en,
        'zh-CN': zhCN
    }
})

export const install: any = (app: App<Element>) => {
    app.use(i18n)
    console.log('vue-i18n loaded!');
}
