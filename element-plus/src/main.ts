import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

// axios
import axios from "axios";
axios.defaults.baseURL = 'https://localhost:44333';

import { useAppStore } from "./stores/app";

const app = createApp(App);
// app.use(ElementPlus);

const pinia = createPinia();
app.use(pinia);// should before useStore

// blocking or loading ?
console.log('say main');
const appStore = useAppStore();
await appStore.init();

app.mount("#app");
