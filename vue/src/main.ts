import { createApp } from "vue";
import App from "./App.vue";
import "./oidc";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
// app.use(ElementPlus);

console.log('say main');

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: any }>('./modules/*.ts', { eager: true })).forEach(i => i.install(app))

// install all directives under `directives/`
Object.values(import.meta.glob<{ setup: any }>(['./directives/*.ts', '!./directives/*.spec.ts'], { eager: true })).forEach(i => i.setup(app))

// 未登录状态下的应用配置获取
import { useAppStore } from "./stores/app";
const appStore = useAppStore(); // use store after pinia ready
await appStore.init(); // 每次重定向都会加载

app.mount("#app");
