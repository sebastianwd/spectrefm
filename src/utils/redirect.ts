import Router from 'next/router'
import { Artist } from '~/generated/graphql'
import { cookieNames } from '~/constants'
import cookies from './cookies'

const redirect = {
  toArtist: (artistData: Partial<Artist>) => {
    cookies().set(cookieNames.ARTIST_SEARCH, artistData)

    Router.push('/artist/[name]', `/artist/${artistData.name}`)
  },
}

export default redirect
