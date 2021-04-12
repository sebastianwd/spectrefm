import { map } from 'lodash'
import { useCallback, useMemo } from 'react'
import { useApolloClient } from '@apollo/client'
import { albumByTrackQuery, trackYoutubeIdsQuery } from '~/gql/queries'
import {
  Track,
  AlbumByTrackQuery,
  TrackYoutubeIdsQuery,
} from '~/__generated__/graphql'
import TrackComponent from '../track'
import useMusicPlayer from '~/hooks/use-music-player'

interface Props {
  tracks: Track[]
}

function formatTrack(tracks: Track[]) {
  return map(tracks, (track) => {
    return {
      track: track.title,
      artist: track.artistName,
    }
  })
}

const Playlist = (props: Props) => {
  const { tracks } = props

  const {
    setCurrentTrackByIndex,
    setQueue,
    updateCurrentTrack,
    playTrack,
  } = useMusicPlayer()

  const client = useApolloClient()

  const queueFormattedTracks = useMemo(() => formatTrack(tracks), [tracks])

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

        playTrack({
          videoId: videoData.trackYoutubeIds[0],
        })

        const { data: albumData } = await client.query<AlbumByTrackQuery>({
          query: albumByTrackQuery,
          variables: {
            artistName: track.artistName,
            trackTitle: track.title,
          },
        })

        updateCurrentTrack({
          album: albumData.albumByTrack?.title,
          albumImageUrl: albumData.albumByTrack?.coverImage,
        })
      }
    },
    [tracks]
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
        />
      ))}
    </>
  )
}

export default Playlist
