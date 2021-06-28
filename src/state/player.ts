/* eslint-disable no-param-reassign */
import { Action, action, Thunk, thunk } from 'easy-peasy'
import { isUndefined } from 'lodash'
import { urls } from '~/constants'
import { initializeApollo } from '~/gql/apollo'
import { albumByTrackQuery, trackYoutubeIdsQuery } from '~/gql/queries'
import { logger } from '~/utils'
import {
  AlbumByTrackQuery,
  TrackYoutubeIdsQuery,
} from '~/__generated__/graphql'
import { StoreModel } from '~/state'

export type QueueTrack = {
  albumImageUrl?: string | null
  track?: string
  artist?: string
  album?: string
  videoIds?: string[]
}

export interface PlaylistModel {
  queue: QueueTrack[]
  currentTrackIndex?: number
  setCurrentTrackByIndex: Action<PlaylistModel, { index: number }>
  setQueue: Action<PlaylistModel, QueueTrack[]>
  updateCurrentTrack: Action<PlaylistModel, QueueTrack>
}

export interface PlayerModel {
  url?: string
  pip: boolean
  playing: boolean
  controls: boolean
  light: boolean
  volume: number
  muted: boolean
  played: number
  playedSeconds?: number
  loadedSeconds?: number
  seeking?: boolean
  loaded: number
  duration: number
  playbackRate: number
  loop: boolean
  searchAndPlay: Thunk<PlayerModel, QueueTrack, any, StoreModel, Promise<void>>
  playTrack: Action<PlayerModel, { videoId: string }>
  onProgress: Action<
    PlayerModel,
    {
      played: number
      playedSeconds: number
      loaded: number
      loadedSeconds: number
    }
  >
  onPlayPause: Action<PlayerModel>
  onDuration: Action<PlayerModel, number>
  onSeekMouseUp: Action<PlayerModel>
  onSeekChange: Action<PlayerModel, number>
  onSeekMouseDown: Action<PlayerModel>
  onPlay: Action<PlayerModel>
  onPause: Action<PlayerModel>
  onEnded: Action<PlayerModel>
}

export const playlistModel: PlaylistModel = {
  queue: [],
  updateCurrentTrack: action((state, payload) => {
    if (!isUndefined(state.currentTrackIndex)) {
      const track = state.queue[state.currentTrackIndex]

      state.queue[state.currentTrackIndex] = { ...track, ...payload }
    }
  }),
  setCurrentTrackByIndex: action((state, payload) => {
    state.currentTrackIndex = payload.index
  }),
  setQueue: action((state, payload) => {
    state.queue = payload
  }),
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
  searchAndPlay: thunk(async (actions, payload, { getStoreActions }) => {
    const apolloClient = initializeApollo()

    const { data: videoData } = await apolloClient.query<TrackYoutubeIdsQuery>({
      query: trackYoutubeIdsQuery,
      variables: {
        artistName: payload.artist,
        trackTitle: payload.track,
        limit: 4,
      },
    })

    if (!videoData.trackYoutubeIds) {
      return
    }

    getStoreActions().playlist.updateCurrentTrack({
      videoIds: videoData.trackYoutubeIds,
    })

    actions.playTrack({ videoId: videoData.trackYoutubeIds[0] })

    const { data: albumData } = await apolloClient.query<AlbumByTrackQuery>({
      query: albumByTrackQuery,
      variables: {
        artistName: payload.artist,
        trackTitle: payload.track,
      },
    })

    getStoreActions().playlist.updateCurrentTrack({
      album: albumData.albumByTrack?.title,
      albumImageUrl: albumData.albumByTrack?.coverImage,
    })
  }),
  playTrack: action((state, payload) => {
    state.played = 0
    state.url = urls.youtube(payload.videoId)
    state.loaded = 0
    state.playing = true
  }),
  onProgress: action((state, payload) => {
    state.played = payload.played
    state.playedSeconds = payload.playedSeconds
    state.loaded = payload.loaded
    state.loadedSeconds = payload.loadedSeconds
  }),
  onPlayPause: action((state) => {
    if (!state.url) {
      return
    }

    state.playing = !state.playing
  }),
  onDuration: action((state, payload) => {
    state.duration = payload
  }),
  onSeekMouseUp: action((state) => {
    state.seeking = false
  }),
  onSeekChange: action((state, payload) => {
    state.played = payload
  }),
  onSeekMouseDown: action((state) => {
    state.seeking = true
  }),
  onPlay: action((state) => {
    logger('song playing')
    state.playing = true
  }),
  onPause: action((state) => {
    logger('song paused')
    state.playing = false
  }),
  onEnded: action((state) => {
    logger('song ended')
    state.playing = false
  }),
}
