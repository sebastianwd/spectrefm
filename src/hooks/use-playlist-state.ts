import { isUndefined } from 'lodash'
import { useStoreState } from '.'

const usePlaylistState = () => {
  const currentTrackIndex = useStoreState(
    (state) => state.playlist.currentTrackIndex
  )

  const queue = useStoreState((state) => state.playlist.queue)

  const currentTrack =
    !isUndefined(currentTrackIndex) && queue.length > 0
      ? queue[currentTrackIndex]
      : undefined

  return {
    currentTrack,
  }
}

export default usePlaylistState
