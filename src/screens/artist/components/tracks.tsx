import React from 'react'
import { map } from 'lodash'
import {
  TopTracksByArtisQuery,
  TopTracksByArtisQueryVariables,
} from '@generated/graphql'
import { useQuery } from '@apollo/react-hooks'
import { topTracksByArtistQuery } from '@gql/queries'
import { Track } from '@components'

interface Props {
  artistName: string
}

const Tracks: React.FC<Props> = (props) => {
  const { artistName } = props

  const { data, loading } = useQuery<
    TopTracksByArtisQuery,
    Partial<TopTracksByArtisQueryVariables>
  >(topTracksByArtistQuery, {
    variables: {
      artistName,
      limit: 30,
    },
  })

  if (loading) {
    return null
  }

  return (
    <>
      {map(data?.topTracksByArtist, (track) => (
        <Track key={track.id} title={track.title} playcount={track.playcount} />
      ))}
    </>
  )
}

export default Tracks
