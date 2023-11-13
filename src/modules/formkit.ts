import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config'
import { App } from 'vue';

// Setup FormKit
// https://formkit.com/getting-started/installation
export const install: any = (app: App<Element>) => {

    app.use(plugin, defaultConfig(config))

    console.log('FormKit loaded!');
}