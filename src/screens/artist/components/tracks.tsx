import React from 'react'
import { useTopTracksByArtistQuery } from '~/generated/graphql'
import Playlist from '~/components/playlist'

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

  if (!data?.topTracksByArtist) {
    return null
  }

  return <Playlist tracks={data.topTracksByArtist} />
}

export default Tracks
