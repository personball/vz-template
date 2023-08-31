# Features

- axios
- pinia
- vue-router
- auto import components: unplugin-vue-components  
- auto import api: unplugin-auto-import  
- auto register router, file-based router: https://github.com/posva/unplugin-vue-router   ~vite-plugin-pages~  
- @vueuse/core  
- auto register modules: https://github.com/antfu/vitesse/tree/main/src/modules  ~dependsOn vite-ssg~
- auto register directives
- // TODO: integrate abp;  
- nswag auto generate api proxies;
- // TODO: integrate formkit;  
- vitest

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
