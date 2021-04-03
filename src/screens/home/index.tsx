import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { SearchAutocomplete } from '~/components'

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Discover new music or listen to your favorite artists!
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Enjoy unlimited free music, find similar artists, full albums, lyrics
        and much more!
      </Typography>
      <SearchAutocompleteContainer>
        <SearchAutocomplete placeholder="Search an artist..." />
      </SearchAutocompleteContainer>
    </Container>
  )
}

const SearchAutocompleteContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)}px;
  width: 100%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    width: ${(props) => props.theme.spacing(112)}px;
  }
`

const Container = styled.div`
  padding-top: 6%;
  padding-left: 5.5%;
`

export default Home
