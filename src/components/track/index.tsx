import React, { useCallback, useEffect } from 'react'
import { useTrackYoutubeIdsLazyQuery } from '@generated/graphql'
import { useStoreActions } from '@hooks'
import Track from './track'

interface Props {
  title: string
  playcount?: string | null
  number?: number
  artistName: string
}

const TrackImpl: React.FC<Props> = (props) => {
  const { title, playcount, number, artistName } = props

  const [trackYoutubeIds, { loading, data }] = useTrackYoutubeIdsLazyQuery()

  const playTrack = useStoreActions((actions) => actions.player.playTrack)

  const onClick = useCallback(() => {
    trackYoutubeIds({ variables: { artistName, trackTitle: title, limit: 2 } })
  }, [artistName, title, trackYoutubeIds])

  useEffect(() => {
    if (data?.trackYoutubeIds) {
      playTrack({ videoId: data?.trackYoutubeIds[0] })
    }
  }, [data?.trackYoutubeIds, playTrack])

  return (
    <Track
      title={title}
      playcount={playcount}
      number={number}
      loading={loading}
      onClick={onClick}
    />
  )
}

export default TrackImpl
