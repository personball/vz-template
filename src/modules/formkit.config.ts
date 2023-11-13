import { zh } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'
import { createElementPlugin } from 'formkit-element'

const config: DefaultConfigOptions = {
  plugins: [createElementPlugin()],
  locales: { zh },
  locale: 'zh',
  icons: {
    ...genesisIcons
  }
}

export default config
