import React, { useCallback, useState } from 'react'
import { useApolloClient } from '@apollo/client'
import { useStoreActions } from '~/hooks'
import { trackYoutubeIdsQuery } from '~/gql/queries'
import Track from './track'

interface Props {
  title: string
  playcount?: string | null
  number?: number
  artistName: string
}

const TrackImpl: React.FC<Props> = (props) => {
  const { title, playcount, number, artistName } = props

  const client = useApolloClient()

  const [loading, setLoading] = useState(false)

  const playTrack = useStoreActions((actions) => actions.player.playTrack)

  const onClick = useCallback(async () => {
    setLoading(true)

    const { data } = await client.query({
      query: trackYoutubeIdsQuery,
      variables: {
        artistName,
        trackTitle: title,
        limit: 2,
      },
    })

    if (data?.trackYoutubeIds) {
      playTrack({ videoId: data?.trackYoutubeIds[0] })
    }

    setLoading(false)
  }, [artistName, title])

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
