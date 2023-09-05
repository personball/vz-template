import { createApp } from "vue";
import App from "./App.vue";
import "./oidc";

// TODO: oidc 登录成功前避免渲染页面；// 可以交给 app.init 去触发认证？ 或改为组件，集成到 router？
// TODO: oidc 支持访问任何页面，登录后能重定向回来；

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

// blocking or loading ?
import { useAppStore } from "./stores/app";
const appStore = useAppStore();
await appStore.init();

app.mount("#app");
