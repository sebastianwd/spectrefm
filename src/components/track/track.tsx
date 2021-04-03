import React, { MouseEventHandler } from 'react'
import {
  ListItem,
  IconButton,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import styled from 'styled-components'
import { FavoriteBorder, PlayArrow } from '@material-ui/icons'
import { lighten } from 'polished'

interface Props {
  title: string
  playcount?: string | null
  number?: number
  onClick?: MouseEventHandler<HTMLDivElement>
  loading?: boolean
}

const Track: React.FC<Props> = (props) => {
  const { title, playcount, number, onClick, loading } = props

  return (
    <Container button onClick={onClick}>
      <NumberLabel variant="caption" color="textPrimary" noWrap>
        {number}
      </NumberLabel>
      <IconButton edge="start" aria-label="favorite" size="small">
        <FavoriteBorder fontSize="small" />
      </IconButton>
      <TitleContainer>
        {loading ? (
          <CircularProgress size={16} />
        ) : (
          <PlayArrow fontSize="small" data-play />
        )}
        <Typography
          variant="body2"
          color="textPrimary"
          data-title
          noWrap
          component="p"
        >
          {title}
        </Typography>
      </TitleContainer>
      {playcount && (
        <Label variant="body2" noWrap color="textSecondary">
          {playcount}
        </Label>
      )}
    </Container>
  )
}

const Container = styled(ListItem)`
  display: flex;
  flex-direction: center;
  height: ${(props) => props.theme.spacing(6)}px;
  border-radius: ${(props) => props.theme.spacing(3)}px;
  transition: all 0.3s ease-in-out 60ms;

  [data-play='true'] {
    transition: all 0.2s ease-in;
    transform: scale(0);
    width: ${(props) => props.theme.spacing(1)}px;
  }

  [data-title='true'] {
    transition: all 0.3s ease-in-out;
  }

  > * {
    margin-right: ${(props) => props.theme.spacing(1.5)}px;
  }

  &:hover {
    background-color: ${(props) =>
      lighten(0.025, props.theme.palette.background.default)};

    [data-play='true'] {
      transform: scale(1);
      width: ${(props) => props.theme.spacing(2.5)}px;
    }

    [data-title='true'] {
      transform: translateX(${(props) => props.theme.spacing(1)}px);
    }
  }
`

const NumberLabel = styled(Typography).attrs(() => ({
  component: 'span',
}))`
  text-align: left;
  display: block;
  width: ${(props) => props.theme.spacing(3)}px;
  flex-shrink: 0;
`

const Label = styled(Typography).attrs(() => ({
  component: 'span',
}))`
  margin-left: auto;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 40%;
`

export default Track
