import React from 'react'
import { map } from 'lodash'
import {
  SimilarArtistsQuery,
  SimilarArtistsQueryVariables,
} from '@generated/graphql'
import { useQuery } from '@apollo/react-hooks'
import { SimilarArtistCard } from '@components'
import { similarArtistsQuery } from '@gql/queries'
import styled from 'styled-components'

interface Props {
  artistName: string
}

const SimlarArtists: React.FC<Props> = (props) => {
  const { artistName } = props

  console.log('artistName', artistName)

  const { data, loading } = useQuery<
    SimilarArtistsQuery,
    Partial<SimilarArtistsQueryVariables>
  >(similarArtistsQuery, {
    variables: {
      artistName,
      limit: 10,
    },
  })

  if (loading) {
    return null
  }

  console.log('data?.similarArtists', data?.similarArtists)

  return (
    <Container>
      {map(data?.similarArtists, (artist) => (
        <SimilarArtistCard
          key={artist.id}
          name={artist.name}
          backgroundImage={artist.image}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  max-height: 550px;
  overflow-y: auto;
`

export default SimlarArtists
