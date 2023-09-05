//oidc.ts
import type { VueOidcSettings } from "vue3-oidc";
import { createOidc, useOidcStore } from "vue3-oidc";
import { unref } from "vue";

const { state } = useOidcStore();

const oidcSettings: VueOidcSettings = {
  authority: "https://localhost:44336",
  scope: "openid",
  client_id: "ProjectName_Vue",
//   client_secret: "your client secret",
  redirect_uri: origin + "/oidc-callback",
  response_type: "code",
  loadUserInfo: true,
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