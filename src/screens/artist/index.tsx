import React from 'react'
import Img from 'react-cool-img'
import { TabPanel, TabContext } from '@material-ui/lab'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import { Typography, Tabs, Tab, Grid } from '@material-ui/core'
import { Artist } from '~/generated/graphql'
import { placeholders } from '~/constants'
import { useStoreState } from '~/hooks'
import { Tracks, SimlarArtists, Albums } from './components'
import useMusicPlayer from '~/hooks/use-music-player'

interface Props {
  artist: Artist
}

const ArtistScreen: React.FC<Props> = (props) => {
  const { artist } = props

  const { bannerImage, name } = artist

  const [value, setValue] = React.useState('1')

  const playerState = useStoreState((state) => state.player)

  const handleChange = (_: any, newValue: string) => setValue(newValue)

  const { onPlay, onPause, onProgress, onDuration, onEnded } = useMusicPlayer()

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
            onEnded={onEnded}
            config={{ onUnstarted: () => {} } as any}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Content item xs={12} md={8}>
          <TabContext value={value}>
            <TabsContainer>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="inherit"
                onChange={handleChange}
                aria-label="tabs"
              >
                <Tab label="top tracks" value="1" />
                <Tab label="albums" value="2" />
              </Tabs>
            </TabsContainer>
            <TabPanel value="1">
              <Tracks artistName={artist.name} />
            </TabPanel>
            <TabPanel value="2">
              <Albums artistName={artist.name} />
            </TabPanel>
          </TabContext>
        </Content>
        <Grid item xs={12} md={4}>
          <SimlarArtists artistName={artist.name} />
        </Grid>
      </Grid>
    </>
  )
}

const TabsContainer = styled.div`
  justify-content: left;
  display: flex;

  button {
    transition: all 0.2s;
  }

  .MuiTab-wrapper {
    ${(props): any => ({ ...props.theme.typography.h5 })};
    font-weight: 500;
  }
`

const Content = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px;
  padding-top: 0;
  transform: translateY(-${(props) => props.theme.spacing(2)}px);

  .MuiTabPanel-root {
    padding: 0;
  }
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
