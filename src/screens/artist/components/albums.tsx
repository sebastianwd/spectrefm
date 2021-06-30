import React from 'react'
import { keyBy, map } from 'lodash'
import { Grid, Button, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import styled from 'styled-components'
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
    [artistName, data?.albumsByArtist]
  )

  if (loading) {
    return null
  }

  const currentAlbum = activeAlbum && albumsByTitle[activeAlbum]

  if (currentAlbum) {
    return (
      <AlbumViewContainer>
        <Button onClick={() => setActiveAlbum(undefined)}>
          <ArrowBackIcon />
          <Typography>Back to albums</Typography>
        </Button>
        <AlbumView
          coverImage={currentAlbum.coverImage}
          title={currentAlbum.title}
          description={currentAlbum.description}
          year={currentAlbum.year || ''}
          onClick={() => onAlbumCardClick(currentAlbum.title)}
        />
        <div>
          <Playlist
            strictAlbumSearch
            tracks={map(currentAlbum.tracks, (track) => ({
              artistName,
              title: track,
              albumTitle: currentAlbum.title,
            }))}
          />
        </div>
      </AlbumViewContainer>
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

const AlbumViewContainer = styled.div`
  > :not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(1)}px;
  }

  > :first-child {
    margin-bottom: ${(props) => props.theme.spacing(2)}px;
  }
`

export default Albums
