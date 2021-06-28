import React from 'react'
import { Typography } from '@material-ui/core'
import Image from 'next/image'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import styled from 'styled-components'

interface Props {
  title: string
  year: string
  coverImage?: string | null
  description?: string | null
  onClick?: () => void
}

const AlbumCard: React.FC<Props> = (props) => {
  const { title, coverImage, description, onClick, year } = props

  return (
    <Container>
      <ImageContainer>
        {coverImage && (
          <Image
            src={coverImage}
            alt={`Album cover for '${title}'`}
            width={168}
            height={168}
          />
        )}
        <StyledPlayArrowIcon />
      </ImageContainer>
      <InfoContainer>
        <Typography variant="subtitle2">{year}</Typography>
        <Typography onClick={onClick} variant="h4" style={{ fontWeight: 200 }}>
          {title}
        </Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </InfoContainer>
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
  flex-shrink: 0;
  align-self: flex-start;

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

const InfoContainer = styled.div`
  padding: ${(props) => props.theme.spacing(1, 1.5)};
`

const Container = styled.div`
  display: flex;
`

export default AlbumCard
