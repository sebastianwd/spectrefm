import { map } from 'lodash'
import { useCallback, useMemo } from 'react'
import { useApolloClient } from '@apollo/client'
import { trackYoutubeIdsQuery } from '~/gql/queries'
import { Track, TrackYoutubeIdsQuery } from '~/__generated__/graphql'
import TrackComponent from '../track'
import useMusicPlayer from '~/hooks/use-music-player'
import usePlaylist from '~/hooks/use-playlist'

interface Props {
  tracks: Track[]
}

function formatTracks(tracks: Track[]) {
  return map(tracks, (track) => {
    return {
      track: track.title,
      artist: track.artistName,
    }
  })
}

const Playlist = (props: Props) => {
  const { tracks } = props

  const { setCurrentTrackByIndex, setQueue, searchAndPlay } = useMusicPlayer()

  const { currentTrack } = usePlaylist()

  const client = useApolloClient()

  const queueFormattedTracks = useMemo(() => formatTracks(tracks), [tracks])

  const onPlayClick = useCallback(
    async (track: Track, index: number) => {
      setQueue(queueFormattedTracks)

      const { data: videoData } = await client.query<TrackYoutubeIdsQuery>({
        query: trackYoutubeIdsQuery,
        variables: {
          artistName: track.artistName,
          trackTitle: track.title,
          limit: 2,
        },
      })

      if (videoData.trackYoutubeIds) {
        setCurrentTrackByIndex({ index })

        searchAndPlay({
          artist: track.artistName,
          track: track.title,
        })
      }
    },
    [queueFormattedTracks]
  )

  return (
    <>
      {map(tracks, (track, index) => (
        <TrackComponent
          key={track.id}
          number={index + 1}
          title={track.title}
          playcount={track.playcount}
          onPlayClick={() => onPlayClick(track, index)}
          isPlaying={currentTrack?.track === track.title}
        />
      ))}
    </>
  )
}

export default Playlist
