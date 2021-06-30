import React from 'react'
import Img from 'react-cool-img'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import { Typography, Grid } from '@material-ui/core'
import { Artist } from '~/generated/graphql'
import { placeholders } from '~/constants'
import { useStoreState } from '~/hooks'
import { Tracks, SimlarArtists, Albums } from './components'
import { Tabs } from '~/components'
import useMusicPlayer from '~/hooks/use-music-player'
import usePlaylist from '~/hooks/use-playlist'

interface Props {
  artist: Artist
}

const ArtistScreen: React.FC<Props> = (props) => {
  const { artist } = props

  const { bannerImage, name } = artist

  const [value, setValue] = React.useState('1')

  const playerState = useStoreState((state) => state.player)

  const { currentTrack = {}, playNext } = usePlaylist()

  const handleChange = (_: any, newValue: string) => setValue(newValue)

  const {
    onPlay,
    onPause,
    onProgress,
    onDuration,
    onEnded,
    playTrack,
    updateCurrentTrack,
  } = useMusicPlayer()

  const onPlayerError = () => {
    const { videoIds = [] } = currentTrack

    if (videoIds.length > 1) {
      playTrack({ videoId: videoIds[1] })

      updateCurrentTrack({ videoIds: [] })

      return
    }

    playNext()
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Header backgroundImage={bannerImage}>
            <InnerHeader>
              <Img
                src={artist.image || placeholders.ARTIST_IMAGE}
                placeholder={placeholders.ARTIST_IMAGE}
                alt="artist profile"
              />
              <TextContainer>
                <Typography
                  color="textPrimary"
                  variant="h2"
                  style={{ fontWeight: 200 }}
                >
                  {name}
                </Typography>
                <Typography color="textSecondary">
                  {artist.style} {artist.genre}
                </Typography>
              </TextContainer>
            </InnerHeader>
          </Header>
        </Grid>
        <Grid item xs={12} md={4}>
          <ReactPlayer
            url={playerState.url}
            height={256}
            width="auto"
            volume={playerState.volume}
            playing={playerState.playing}
            muted={playerState.muted}
            pip={playerState.pip}
            controls
            onPlay={onPlay}
            onPause={onPause}
            onProgress={onProgress}
            onDuration={onDuration}
            onError={onPlayerError}
            onEnded={onEnded}
            config={{ onUnstarted: () => {} } as any}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Content item xs={12} md={8}>
          <Tabs>
            <StyledTabList>
              <Tabs.TabButton>top tracks</Tabs.TabButton>
              <Tabs.TabButton>albums</Tabs.TabButton>
            </StyledTabList>
            <Tabs.LazyTabPanel>
              <Tracks artistName={artist.name} />
            </Tabs.LazyTabPanel>
            <Tabs.LazyTabPanel>
              <Albums artistName={artist.name} />
            </Tabs.LazyTabPanel>
          </Tabs>
        </Content>
        <Grid item xs={12} md={4}>
          <SimlarArtists artistName={artist.name} />
        </Grid>
      </Grid>
    </>
  )
}

const StyledTabList = styled(Tabs.TabList)`
  justify-content: left;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;

  ${Tabs.TabButton} {
    ${(props): any => ({ ...props.theme.typography.h5 })};
    font-weight: 500;
    min-width: ${(props) => props.theme.spacing(20)}px;
    transition: all 0.2s;
  }
`

const Content = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px;
  padding-top: 0;
  transform: translateY(-${(props) => props.theme.spacing(2)}px);
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props) => props.theme.spacing(2)}px;
`

const InnerHeader = styled.div`
  display: flex;
  position: absolute;
  padding: ${(props) => props.theme.spacing(3)}px;
  bottom: 0;
  left: 0;

  > img {
    height: ${(props) => props.theme.spacing(21)}px;
    border-radius: 50%;
  }
`

const getBackground = (props: any) => {
  if (props.backgroundImage) {
    return css`
      background-image: url(${props.backgroundImage});
      background-position: center 10%;
    `
  }

  return css`
    background-color: transparent;
    background-image: linear-gradient(
      315deg,
      transparent 0%,
      ${props.theme.palette.grey[800]} 74%
    );
  `
}

const Header = styled.header<{ backgroundImage?: string | null }>`
  ${(props) => getBackground(props)}
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  height: ${(props) => props.theme.spacing(32)}px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: linear-gradient(
        to bottom,
        transparent -80%,
        ${(props) => props.theme.palette.background.default} 100%
      ),
      linear-gradient(
        to left,
        transparent 99%,
        ${(props) => props.theme.palette.background.default} 100%
      );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

export default ArtistScreen
