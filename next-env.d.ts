/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="styled-components/cssprop" />
import { Theme } from '@material-ui/core'
import { CSSProp, DefaultTheme } from 'styled-components'

declare module '*.svg' {
  const value: any
  export default value
}
declare module '*.png' {
  const value: any
  export default value
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp<DefaultTheme>
  }
}
