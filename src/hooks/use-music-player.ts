import { useStoreActions } from '.'

const useMusicPlayer = () => {
  const playTrack = useStoreActions((actions) => actions.player.playTrack)

  const searchAndPlay = useStoreActions(
    (actions) => actions.player.searchAndPlay
  )

  const onProgress = useStoreActions((actions) => actions.player.onProgress)

  const onDuration = useStoreActions((actions) => actions.player.onDuration)

  const onSeekMouseUp = useStoreActions(
    (actions) => actions.player.onSeekMouseUp
  )
  const onSeekChange = useStoreActions((actions) => actions.player.onSeekChange)

  const onSeekMouseDown = useStoreActions(
    (actions) => actions.player.onSeekMouseDown
  )
  const onPlay = useStoreActions((actions) => actions.player.onPlay)

  const onPause = useStoreActions((actions) => actions.player.onPause)

  const onPlayPause = useStoreActions((actions) => actions.player.onPlayPause)

  const onEnded = useStoreActions((actions) => actions.player.onEnded)

  const setQueue = useStoreActions((actions) => actions.playlist.setQueue)

  const setCurrentTrackByIndex = useStoreActions(
    (actions) => actions.playlist.setCurrentTrackByIndex
  )

  const updateCurrentTrack = useStoreActions(
    (actions) => actions.playlist.updateCurrentTrack
  )

  return {
    playTrack,
    searchAndPlay,
    onProgress,
    onDuration,
    onSeekMouseUp,
    onSeekChange,
    onSeekMouseDown,
    onPlay,
    onPause,
    onPlayPause,
    onEnded,
    setQueue,
    setCurrentTrackByIndex,
    updateCurrentTrack,
  }
}

export default useMusicPlayer
