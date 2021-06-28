import React from 'react'
import { keyBy, map } from 'lodash'
import { Grid } from '@material-ui/core'
import { useAlbumsByArtistQuery } from '~/generated/graphql'
import { AlbumCard } from '~/components'
import Playlist from '~/components/playlist'
import AlbumView from '~/components/album-view'

interface Props {
  artistName: string
}

const Albums: React.FC<Props> = (props) => {
  const { artistName } = props

  const [activeAlbum, setActiveAlbum] = React.useState<string | undefined>()

  const { data, loading } = useAlbumsByArtistQuery({
    variables: {
      artistName,
      limit: 8,
    },
  })

  const albumsByTitle = React.useMemo(
    () => keyBy(data?.albumsByArtist, 'title'),
    [data?.albumsByArtist]
  )

  if (loading) {
    return null
  }

  if (activeAlbum) {
    const album = albumsByTitle[activeAlbum]
    return (
      <>
        <AlbumView
          coverImage={album.coverImage}
          title={album.title}
          description={album.description}
          year={album.year || ''}
          onClick={() => onAlbumCardClick(album.title)}
        />
        <Playlist
          strictAlbumSearch
          tracks={map(album.tracks, (track) => ({
            artistName,
            title: track,
            albumTitle: album.title,
          }))}
        />
      </>
    )
  }

  const onAlbumCardClick = (albumTitle: string) => {
    setActiveAlbum(albumTitle)
  }

  return (
    <Grid container spacing={2} wrap="wrap">
      {map(data?.albumsByArtist, (album) => (
        <Grid key={album.id} item xs={6} lg={3} sm={4}>
          <AlbumCard
            coverImage={album.coverImage}
            title={album.title}
            onClick={() => onAlbumCardClick(album.title)}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Albums
