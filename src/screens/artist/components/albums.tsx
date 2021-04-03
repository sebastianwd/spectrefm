import React from 'react'
import { map } from 'lodash'
import { Grid } from '@material-ui/core'
import { useAlbumsByArtistQuery } from '~/generated/graphql'
import { AlbumCard } from '~/components'

interface Props {
  artistName: string
}

const Albums: React.FC<Props> = (props) => {
  const { artistName } = props

  const { data, loading } = useAlbumsByArtistQuery({
    variables: {
      artistName,
      limit: 8,
    },
  })

  if (loading) {
    return null
  }

  return (
    <Grid container spacing={2} wrap="wrap">
      {map(data?.albumsByArtist, (album) => (
        <Grid key={album.id} item xs={6} lg={3} sm={4} wrap="wrap">
          <AlbumCard coverImage={album.coverImage} title={album.title} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Albums
