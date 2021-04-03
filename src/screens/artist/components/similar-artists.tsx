import React from 'react'
import { map } from 'lodash'

import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import SimpleBar from 'simplebar-react'
import { Typography } from '@material-ui/core'
import {
  SimilarArtistsQuery,
  SimilarArtistsQueryVariables,
} from '~/generated/graphql'
import { SimilarArtistCard } from '~/components'
import { similarArtistsQuery } from '~/gql/queries'

interface Props {
  artistName: string
}

const SimlarArtists: React.FC<Props> = (props) => {
  const { artistName } = props

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

  return (
    <Container>
      <Header variant="h5">similar artists</Header>
      <ScrollBar>
        <Content>
          {map(data?.similarArtists, (artist) => (
            <SimilarArtistCard
              key={artist.id}
              name={artist.name}
              backgroundImage={artist.image}
            />
          ))}
        </Content>
      </ScrollBar>
    </Container>
  )
}

const Header = styled(Typography)`
  padding: ${(props) => props.theme.spacing(2)}px 0;
  font-weight: 500;
`

const Container = styled.div`
  border-radius: ${(props) => props.theme.spacing(2)}px;
  margin-top: ${(props) => props.theme.spacing(3)}px;
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 0 ${(props) => props.theme.spacing(3)}px;
`

const ScrollBar = styled(SimpleBar)`
  max-height: ${(props) => props.theme.spacing(69)}px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  overflow-y: auto;
`

export default SimlarArtists
