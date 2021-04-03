/* eslint-disable no-param-reassign */
import { Action, action } from 'easy-peasy'
import { urls } from '~/constants'

export interface PlayerModel {
  url?: string
  pip: boolean
  playing: boolean
  controls: boolean
  light: boolean
  volume: number
  muted: boolean
  played: number
  loaded: number
  duration: number
  playbackRate: number
  loop: boolean
  playTrack: Action<PlayerModel, { videoId: string }>
}

export const playerModel: PlayerModel = {
  url: undefined,
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  playTrack: action((state, payload) => {
    state.played = 0
    state.url = urls.youtube(payload.videoId)
    state.loaded = 0
    state.playing = true
  }),
}
