import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Typography } from '@material-ui/core'
import { transparentize } from 'polished'

interface Props {
  name: string
  backgroundImage?: string | null
}

const SimilarArtistCard: React.FC<Props> = (props) => {
  const { backgroundImage, name } = props

  return (
    <Link href="/artist/[name]" as={`/artist/${name}`} passHref>
      <Anchor>
        <Background backgroundImage={backgroundImage} />
        <Title variant="body2">{name}</Title>
      </Anchor>
    </Link>
  )
}

const Background = styled.div<{ backgroundImage?: string | null }>`
  ${(props) =>
    props.backgroundImage
      ? css`
          background-image: url(${props.backgroundImage});
          background-position: center 10%;
          background-repeat: no-repeat;
          background-size: cover;
        `
      : css`
          background-image: -webkit-radial-gradient(
            top,
            circle farthest-corner,
            #252529 0,
            rgba(18, 18, 20, 0.854902) 80%
          );
        `}

  height: 250px;

  transition: all 0.3s ease;
  position: absolute;
  height: 100%;
  width: 100%;
`

const Title = styled(Typography)`
  border-radius: ${(props) => props.theme.spacing(1)}px;
  padding: ${(props) => props.theme.spacing(1)}px;
  background-color: ${(props) =>
    transparentize(0.15, props.theme.palette.background.paper)};
  position: absolute;
`

const Anchor = styled.a`
  overflow: hidden;
  position: relative;
  height: ${(props) => props.theme.spacing(32)}px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${Background} {
      transform: scale(1.1);
      filter: blur(2px);
    }
  }
`

export default SimilarArtistCard
