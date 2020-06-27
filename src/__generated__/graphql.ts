export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  me: Maybe<User>
  topTracksByArtist: Maybe<Array<Track>>
  similarArtists: Maybe<Array<Artist>>
  artist: Maybe<Artist>
  searchArtists: Maybe<Array<Scalars['String']>>
  albumByTrack: Maybe<Album>
  album: Maybe<Album>
  albumsByArtist: Maybe<Array<Album>>
}

export type QueryTopTracksByArtistArgs = {
  page: Maybe<Scalars['Float']>
  limit: Maybe<Scalars['Float']>
  artistName: Scalars['String']
}

export type QuerySimilarArtistsArgs = {
  withInfo?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Float']>
  artistName: Scalars['String']
}

export type QueryArtistArgs = {
  artistName: Scalars['String']
}

export type QuerySearchArtistsArgs = {
  limit?: Maybe<Scalars['Float']>
  artistName: Scalars['String']
}

export type QueryAlbumByTrackArgs = {
  artistName: Scalars['String']
  trackTitle: Scalars['String']
}

export type QueryAlbumArgs = {
  artistName: Scalars['String']
  albumTitle: Scalars['String']
}

export type QueryAlbumsByArtistArgs = {
  page: Maybe<Scalars['Float']>
  limit: Maybe<Scalars['Float']>
  artistName: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  fullName: Scalars['String']
}

export type Track = {
  __typename?: 'Track'
  id: Scalars['ID']
  title: Scalars['String']
  playcount: Maybe<Scalars['String']>
  artistName: Scalars['String']
}

export type Artist = {
  __typename?: 'Artist'
  id: Scalars['ID']
  name: Scalars['String']
  formedYear: Maybe<Scalars['String']>
  image: Maybe<Scalars['String']>
  bannerImage: Maybe<Scalars['String']>
  logo: Maybe<Scalars['String']>
  style: Maybe<Scalars['String']>
  genre: Maybe<Scalars['String']>
  website: Maybe<Scalars['String']>
  facebook: Maybe<Scalars['String']>
  twitter: Maybe<Scalars['String']>
  biography: Maybe<Scalars['String']>
  memberQuantity: Maybe<Scalars['Float']>
  location: Maybe<Scalars['String']>
  disbanded: Maybe<Scalars['Boolean']>
  disbandedYear: Maybe<Scalars['String']>
}

export type Album = {
  __typename?: 'Album'
  id: Scalars['ID']
  title: Scalars['String']
  artistName: Scalars['String']
  genre: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  coverImage: Maybe<Scalars['String']>
  year: Maybe<Scalars['String']>
  tracks: Array<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  register: User
  login: Maybe<User>
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type RegisterInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginMutationVariables = Exact<{ [key: string]: never }>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'firstName' | 'email' | 'fullName'
    >
  >
}
