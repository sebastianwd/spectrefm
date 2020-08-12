import React from 'react'
import { NextPage } from 'next'
import { cookies } from '@utils'
import { cookieNames } from '@constants'
import { initializeApollo } from '@gql/apollo'
import { artistQuery } from '@gql/queries'
import { ArtistQuery, ArtistQueryVariables, Artist } from '@generated/graphql'
import { ArtistScreen } from '@screens'

interface Props {
  artist: Artist
}

const ArtistPage: NextPage<Props> = (props) => {
  const { artist } = props

  return <ArtistScreen artist={artist} />
}

ArtistPage.getInitialProps = async (context) => {
  const artistCookie: Artist = cookies(context.req).get(
    cookieNames.ARTIST_SEARCH
  )

  if (artistCookie) {
    cookies(context.req).set(cookieNames.ARTIST_SEARCH, '', { maxAge: 0 })

    return {
      artist: artistCookie,
    }
  }

  const artistName = context.query.name as string

  const apolloClient = initializeApollo()

  const queryOptions = {
    query: artistQuery,
    variables: {
      artistName,
    },
  }

  const response = await apolloClient.query<ArtistQuery, ArtistQueryVariables>(
    queryOptions
  )

  return {
    artist: response.data.artist as Artist,
  }
}

export default ArtistPage
