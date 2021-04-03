import React from 'react'
import { Typography } from '@material-ui/core'
import Image from 'next/image'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import styled from 'styled-components'

interface Props {
  title: string
  coverImage?: string | null
}

const AlbumCard: React.FC<Props> = (props) => {
  const { title, coverImage } = props

  return (
    <Container>
      <ImageContainer>
        {coverImage && (
          <Image
            src={coverImage}
            alt={`Album cover for '${title}'`}
            width={240}
            height={240}
          />
        )}
        <StyledPlayArrowIcon />
      </ImageContainer>
      <Typography variant="caption" align="center">
        {title}
      </Typography>
    </Container>
  )
}

const StyledPlayArrowIcon = styled(PlayArrowIcon)`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  opacity: 0;
  transition: all 0.3s;
  z-index: 1;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.palette.common.black};
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    ${StyledPlayArrowIcon} {
      opacity: 1;
    }

    &::after {
      opacity: 0.5;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default AlbumCard
