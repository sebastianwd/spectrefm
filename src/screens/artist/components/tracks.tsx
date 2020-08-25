import React from 'react'
import { map } from 'lodash'
import { useTopTracksByArtistQuery } from '@generated/graphql'
import { Track } from '@components'

interface Props {
  artistName: string
}

const Tracks: React.FC<Props> = (props) => {
  const { artistName } = props

  const { data, loading } = useTopTracksByArtistQuery({
    variables: {
      artistName,
      limit: 30,
      page: null,
    },
  })

  if (loading) {
    return null
  }

  return (
    <>
      {map(data?.topTracksByArtist, (track, index) => (
        <Track
          key={track.id}
          number={index + 1}
          title={track.title}
          playcount={track.playcount}
          artistName={artistName}
        />
      ))}
    </>
  )
}

export default Tracks
