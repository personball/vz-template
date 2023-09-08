//oidc.ts
import type { VueOidcSettings } from "vue3-oidc";
import { createOidc, useOidcStore } from "vue3-oidc";
import { WebStorageStateStore } from 'oidc-client-ts';
import { unref } from "vue";

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
  onSigninRedirectCallback(user) {
    console.log(user);
    location.href = unref(state).redirect_uri || "/";
  },
};

createOidc({
  oidcSettings: oidcSettings, //your oidc settings
  auth: true, //if auth is true,will auto authenticate
  events: {}, //your oidc customization callback events
});