//oidc.ts
import type { VueOidcSettings } from "vue3-oidc";
import { createOidc, useOidcStore } from "vue3-oidc";
import { WebStorageStateStore } from 'oidc-client-ts';
import { unref } from "vue";
import { useAppStore } from "./stores/app";

const { state } = useOidcStore();

const oidcSettings: VueOidcSettings = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY_SERVER,
  scope: import.meta.env.VITE_OIDC_SCOPE,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  //   client_secret: "your client secret",
  redirect_uri: origin + "/oidc-callback",
  response_type: "code",
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  onSigninRedirectCallback: async (user) => {
    console.log('callback to init app...', user);
    const appStore = useAppStore()
    await appStore.init()
    // TODO: 无法使用 vue router，重定向过程中页面闪烁问题估计需要实现一个具体对应 /oidc-callback 的组件才行
    // see: https://github.com/zhazhazhu/vue3-oidc/blob/2a8d8a6dfd9f104747eb4ab19b6fce89daed7cad/example/client/src/Callback.vue
    location.href = unref(state).redirect_uri || "/#/";
  },
  post_logout_redirect_uri: origin, //'http://localhost:4200' // logout: await useOidcStore().state.value.userManager.signoutRedirect()
};

createOidc({
  oidcSettings: oidcSettings, //your oidc settings
  auth: false, //if auth is true,will auto authenticate
  events: {}, //your oidc customization callback events
});