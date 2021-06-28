declare module 'react-player/youtube' {
  import ReactPlayer from 'react-player'

  export default ReactPlayer
}

declare module '*.svg' {
  const value: any
  export default value
}

declare module '*.png' {
  const value: any
  export default value
}

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>
