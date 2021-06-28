import { isUndefined } from 'lodash'
import useMusicPlayer from './use-music-player'
import { useStoreState } from '.'

const usePlaylist = () => {
  const { searchAndPlay, setCurrentTrackByIndex } = useMusicPlayer()

  const currentTrackIndex = useStoreState(
    (state) => state.playlist.currentTrackIndex
  )

  const playlist = useStoreState((state) => state.playlist)

  const isTrackActive = !isUndefined(currentTrackIndex)

  const currentTrack =
    isTrackActive && playlist.queue.length > 0
      ? playlist.queue[currentTrackIndex!]
      : undefined

  const playPrev = async () => {
    const { queue } = playlist

    if (queue.length > 0 && isTrackActive) {
      const prevTrack = playlist.queue?.[currentTrackIndex! - 1]

      if (!prevTrack) {
        return
      }

      setCurrentTrackByIndex({ index: currentTrackIndex! - 1 })

      searchAndPlay({
        artist: prevTrack.artist,
        track: prevTrack.track,
      })
    }
  }

  const playNext = async () => {
    const { queue } = playlist

    if (queue.length > 0 && isTrackActive) {
      const nextTrack = playlist.queue?.[currentTrackIndex! + 1]

      if (!nextTrack) {
        return
      }

      setCurrentTrackByIndex({ index: currentTrackIndex! + 1 })

      searchAndPlay({
        artist: nextTrack.artist,
        track: nextTrack.track,
      })
    }
  }

  return {
    playPrev,
    playNext,
    currentTrack,
  }
}

export default usePlaylist
