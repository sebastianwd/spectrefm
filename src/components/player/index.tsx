import styled, { CSSProperties } from 'styled-components'
import Image from 'next/image'
import { IconButton, Typography } from '@material-ui/core'
import PlayIcon from '@material-ui/icons/PlayArrowRounded'
import PauseIcon from '@material-ui/icons/PauseCircleFilledRounded'
import SkipNextIcon from '@material-ui/icons/SkipNextRounded'
import SkipPreviousIcon from '@material-ui/icons/SkipPreviousRounded'
import usePlaylistState from '~/hooks/use-playlist-state'
import { useStoreState } from '~/hooks'
import useMusicPlayer from '~/hooks/use-music-player'

interface Props {
  style?: CSSProperties
}

const Player = (props: Props) => {
  const { ...rest } = props

  const { onPlayPause } = useMusicPlayer()

  const { currentTrack = {} } = usePlaylistState()

  const playerState = useStoreState((state) => state.player)

  const { albumImageUrl, track, artist } = currentTrack

  const PlayPauseIcon = playerState.playing ? PauseIcon : PlayIcon

  return (
    <Container {...rest}>
      <CurrentTrack>
        {albumImageUrl && (
          <Image
            src={albumImageUrl}
            alt={`Album cover for '${track}'`}
            width={56}
            height={56}
          />
        )}
        <div>
          <Typography variant="body2">{track}</Typography>
          <Typography variant="caption">{artist}</Typography>
        </div>
      </CurrentTrack>
      <MainControls>
        <IconButton aria-label="play previous">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="play or pause" onClick={() => onPlayPause()}>
          <PlayPauseIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="play next">
          <SkipNextIcon />
        </IconButton>
      </MainControls>
      <SecondaryControls>a</SecondaryControls>
    </Container>
  )
}

const CurrentTrack = styled.div`
  display: flex;

  > :last-child {
    margin: auto ${(props) => props.theme.spacing(1)}px;
  }
`

const MainControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SecondaryControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.spacing(12)}px;
  background-color: ${(props) => props.theme.palette.secondary.dark};
  width: 100%;

  > * {
    flex-grow: 1;
    flex-basis: 0;
  }

  ${CurrentTrack} {
    padding-left: ${(props) => props.theme.spacing(4)}px;
  }

  ${SecondaryControls} {
    padding-right: ${(props) => props.theme.spacing(4)}px;
  }
`

export default Player
