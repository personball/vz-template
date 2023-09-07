# Features

- [x] axios
- [x] pinia
- [x] vue-router
- [x] @vueuse/core  
- [x] vitest
- [x] auto import api: unplugin-auto-import  
- [x] auto import components: unplugin-vue-components  
- [x] auto register router, file-based router: https://github.com/posva/unplugin-vue-router   ~vite-plugin-pages~  
- [x] vite-plugin-vue-layouts with routes fix
- [x] auto register modules: https://github.com/antfu/vitesse/tree/main/src/modules  ~dependsOn vite-ssg~
- [x] auto register directives  
- [ ] integrate abp;
    - [x] vue3-oidc with abp AuthServer
    - [ ] currentUser & currentTenant
    - [x] acl: permissions
    - [ ] features:
    - [ ] globalFeatures:
    - [ ] localization;
    - [ ] settings;  
- nswag auto generate api proxies;  
- [ ] integrate formkit;  

---
# element-plus-vite-starter

> A starter kit for Element Plus with Vite

- Preview: <https://vite-starter.element-plus.org>

This is an example of on-demand element-plus with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

> If you want to import all, it may be so simple that no examples are needed. Just follow [quickstart | Docs](https://element-plus.org/zh-CN/guide/quickstart.html) and import them.

If you just want an on-demand import example `manually`, you can check [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus/tree/main/examples/vite).

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.
