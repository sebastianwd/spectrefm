import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  backgroundImage?: string | null
}

const SimilarArtistCard: React.FC<Props> = (props) => {
  const { backgroundImage } = props

  return (
    <Container backgroundImage={backgroundImage}>
      <div />
    </Container>
  )
}

const Container = styled.div<{ backgroundImage?: string | null }>`
  height: 250px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center 10%;
  background-repeat: no-repeat;
  background-size: cover;
`

export default SimilarArtistCard
