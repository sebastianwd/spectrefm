/// <reference types="next" />
/// <reference types="next/types/global" />
import 'styled-components'

declare module '*.svg' {
  const value: any
  export default value
}
declare module '*.png' {
  const value: any
  export default value
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }
  }
}
