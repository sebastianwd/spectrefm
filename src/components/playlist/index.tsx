import { map } from 'lodash'
import { memo, useCallback, useMemo } from 'react'
import { Track } from '~/__generated__/graphql'
import TrackComponent from '../track'
import useMusicPlayer from '~/hooks/use-music-player'
import usePlaylist from '~/hooks/use-playlist'
import { OptionalExceptFor } from '~/index'

type PlaylistTrack = OptionalExceptFor<Track, 'artistName' | 'title'> & {
  albumTitle?: string
}

interface Props {
  tracks: PlaylistTrack[]
  strictAlbumSearch?: boolean
}

function formatTracks(tracks: PlaylistTrack[]) {
  return map(tracks, (track) => {
    return {
      track: track.title,
      artist: track.artistName,
    }
  })
}

const Playlist = memo((props: Props) => {
  const { tracks, strictAlbumSearch } = props

  const { setCurrentTrackByIndex, setQueue, searchAndPlay } = useMusicPlayer()

  const { currentTrack } = usePlaylist()

  const queueFormattedTracks = useMemo(() => formatTracks(tracks), [])

  const onPlayClick = useCallback(
    async (track: PlaylistTrack, index: number) => {
      setQueue(queueFormattedTracks)

      setCurrentTrackByIndex({ index })

      await searchAndPlay({
        artist: track.artistName,
        track: track.title,
        album: strictAlbumSearch ? track.albumTitle : undefined,
      })
    },
    [queueFormattedTracks]
  )

  return (
    <>
      {map(tracks, (track, index) => (
        <TrackComponent
          key={`${track.artistName}${track.title}`}
          number={index + 1}
          title={track.title}
          playcount={track.playcount}
          onPlayClick={() => onPlayClick(track, index)}
          isPlaying={currentTrack?.track === track.title}
        />
      ))}
    </>
  )
})

Playlist.displayName = 'Playlist'

export default Playlist
