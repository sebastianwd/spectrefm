/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="styled-components/cssprop" />
/// <reference types='@material-ui/lab/themeAugmentation' />

import { Theme } from '@material-ui/core'
import { CSSProp, DefaultTheme as SCTheme } from 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp<SCTheme>
  }
}
