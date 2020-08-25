import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | null>
  : T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
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

export type AwsSignedUrlResult = {
  __typename?: 'AWSSignedUrlResult'
  signedRequest: Scalars['String']
  url: Scalars['String']
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

export type Query = {
  __typename?: 'Query'
  albumByTrack: Maybe<Album>
  album: Maybe<Album>
  albumsByArtist: Maybe<Array<Album>>
  topTracksByArtist: Array<Track>
  similarArtists: Array<Artist>
  artist: Maybe<Artist>
  searchArtists: Array<Scalars['String']>
  me: Maybe<User>
  trackYoutubeIds: Maybe<Array<Scalars['String']>>
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
  page: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  artistName: Scalars['String']
}

export type QueryTopTracksByArtistArgs = {
  page: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  artistName: Scalars['String']
}

export type QuerySimilarArtistsArgs = {
  withInfo?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  artistName: Scalars['String']
}

export type QueryArtistArgs = {
  artistName: Scalars['String']
}

export type QuerySearchArtistsArgs = {
  limit?: Maybe<Scalars['Int']>
  artistName: Scalars['String']
}

export type QueryTrackYoutubeIdsArgs = {
  limit?: Maybe<Scalars['Int']>
  trackTitle: Scalars['String']
  artistName: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  register: User
  login: Maybe<User>
  signS3: Maybe<AwsSignedUrlResult>
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationSignS3Args = {
  fileType: Scalars['String']
  fileName: Scalars['String']
}

export type ArtistFragment = { __typename?: 'Artist' } & Pick<
  Artist,
  | 'id'
  | 'bannerImage'
  | 'biography'
  | 'disbanded'
  | 'disbandedYear'
  | 'facebook'
  | 'formedYear'
  | 'genre'
  | 'image'
  | 'location'
  | 'logo'
  | 'memberQuantity'
  | 'name'
  | 'style'
  | 'twitter'
  | 'website'
>

export type LoginMutationVariables = Exact<{ [key: string]: never }>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'firstName' | 'email' | 'fullName'
    >
  >
}

export type ArtistQueryVariables = Exact<{
  artistName: Scalars['String']
}>

export type ArtistQuery = { __typename?: 'Query' } & {
  artist: Maybe<{ __typename?: 'Artist' } & ArtistFragment>
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & {
  me: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'email' | 'firstName' | 'fullName' | 'lastName'
    >
  >
}

export type SearchArtistsQueryVariables = Exact<{
  artistName: Scalars['String']
  limit: Maybe<Scalars['Int']>
}>

export type SearchArtistsQuery = { __typename?: 'Query' } & Pick<
  Query,
  'searchArtists'
>

export type SimilarArtistsQueryVariables = Exact<{
  artistName: Scalars['String']
  limit: Maybe<Scalars['Int']>
}>

export type SimilarArtistsQuery = { __typename?: 'Query' } & {
  similarArtists: Array<
    { __typename?: 'Artist' } & Pick<Artist, 'id' | 'name' | 'image'>
  >
}

export type TopTracksByArtistQueryVariables = Exact<{
  artistName: Scalars['String']
  limit: Maybe<Scalars['Int']>
  page: Maybe<Scalars['Int']>
}>

export type TopTracksByArtistQuery = { __typename?: 'Query' } & {
  topTracksByArtist: Array<
    { __typename?: 'Track' } & Pick<
      Track,
      'id' | 'title' | 'artistName' | 'playcount'
    >
  >
}

export type TrackYoutubeIdsQueryVariables = Exact<{
  artistName: Scalars['String']
  trackTitle: Scalars['String']
  limit: Maybe<Scalars['Int']>
}>

export type TrackYoutubeIdsQuery = { __typename?: 'Query' } & Pick<
  Query,
  'trackYoutubeIds'
>

export const ArtistFragmentDoc = gql`
  fragment artist on Artist {
    id
    bannerImage
    biography
    disbanded
    disbandedYear
    facebook
    formedYear
    genre
    image
    location
    logo
    memberQuantity
    name
    style
    twitter
    website
  }
`
export const LoginDocument = gql`
  mutation login {
    login(input: { email: "bob@bob.com", password: "123" }) {
      id
      firstName
      email
      fullName
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const ArtistDocument = gql`
  query artist($artistName: String!) {
    artist(artistName: $artistName) {
      ...artist
    }
  }
  ${ArtistFragmentDoc}
`

/**
 * __useArtistQuery__
 *
 * To run a query within a React component, call `useArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtistQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *   },
 * });
 */
export function useArtistQuery(
  baseOptions?: Apollo.QueryHookOptions<ArtistQuery, ArtistQueryVariables>
) {
  return Apollo.useQuery<ArtistQuery, ArtistQueryVariables>(
    ArtistDocument,
    baseOptions
  )
}
export function useArtistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ArtistQuery, ArtistQueryVariables>
) {
  return Apollo.useLazyQuery<ArtistQuery, ArtistQueryVariables>(
    ArtistDocument,
    baseOptions
  )
}
export type ArtistQueryHookResult = ReturnType<typeof useArtistQuery>
export type ArtistLazyQueryHookResult = ReturnType<typeof useArtistLazyQuery>
export type ArtistQueryResult = Apollo.QueryResult<
  ArtistQuery,
  ArtistQueryVariables
>
export const MeDocument = gql`
  query me {
    me {
      id
      email
      firstName
      fullName
      lastName
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const SearchArtistsDocument = gql`
  query searchArtists($artistName: String!, $limit: Int) {
    searchArtists(artistName: $artistName, limit: $limit)
  }
`

/**
 * __useSearchArtistsQuery__
 *
 * To run a query within a React component, call `useSearchArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArtistsQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchArtistsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchArtistsQuery,
    SearchArtistsQueryVariables
  >
) {
  return Apollo.useQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(
    SearchArtistsDocument,
    baseOptions
  )
}
export function useSearchArtistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchArtistsQuery,
    SearchArtistsQueryVariables
  >
) {
  return Apollo.useLazyQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(
    SearchArtistsDocument,
    baseOptions
  )
}
export type SearchArtistsQueryHookResult = ReturnType<
  typeof useSearchArtistsQuery
>
export type SearchArtistsLazyQueryHookResult = ReturnType<
  typeof useSearchArtistsLazyQuery
>
export type SearchArtistsQueryResult = Apollo.QueryResult<
  SearchArtistsQuery,
  SearchArtistsQueryVariables
>
export const SimilarArtistsDocument = gql`
  query similarArtists($artistName: String!, $limit: Int) {
    similarArtists(artistName: $artistName, limit: $limit, withInfo: true) {
      id
      name
      image
    }
  }
`

/**
 * __useSimilarArtistsQuery__
 *
 * To run a query within a React component, call `useSimilarArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimilarArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimilarArtistsQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSimilarArtistsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SimilarArtistsQuery,
    SimilarArtistsQueryVariables
  >
) {
  return Apollo.useQuery<SimilarArtistsQuery, SimilarArtistsQueryVariables>(
    SimilarArtistsDocument,
    baseOptions
  )
}
export function useSimilarArtistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SimilarArtistsQuery,
    SimilarArtistsQueryVariables
  >
) {
  return Apollo.useLazyQuery<SimilarArtistsQuery, SimilarArtistsQueryVariables>(
    SimilarArtistsDocument,
    baseOptions
  )
}
export type SimilarArtistsQueryHookResult = ReturnType<
  typeof useSimilarArtistsQuery
>
export type SimilarArtistsLazyQueryHookResult = ReturnType<
  typeof useSimilarArtistsLazyQuery
>
export type SimilarArtistsQueryResult = Apollo.QueryResult<
  SimilarArtistsQuery,
  SimilarArtistsQueryVariables
>
export const TopTracksByArtistDocument = gql`
  query topTracksByArtist($artistName: String!, $limit: Int, $page: Int) {
    topTracksByArtist(artistName: $artistName, limit: $limit, page: $page) {
      id
      title
      artistName
      playcount
    }
  }
`

/**
 * __useTopTracksByArtistQuery__
 *
 * To run a query within a React component, call `useTopTracksByArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopTracksByArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopTracksByArtistQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useTopTracksByArtistQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TopTracksByArtistQuery,
    TopTracksByArtistQueryVariables
  >
) {
  return Apollo.useQuery<
    TopTracksByArtistQuery,
    TopTracksByArtistQueryVariables
  >(TopTracksByArtistDocument, baseOptions)
}
export function useTopTracksByArtistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TopTracksByArtistQuery,
    TopTracksByArtistQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    TopTracksByArtistQuery,
    TopTracksByArtistQueryVariables
  >(TopTracksByArtistDocument, baseOptions)
}
export type TopTracksByArtistQueryHookResult = ReturnType<
  typeof useTopTracksByArtistQuery
>
export type TopTracksByArtistLazyQueryHookResult = ReturnType<
  typeof useTopTracksByArtistLazyQuery
>
export type TopTracksByArtistQueryResult = Apollo.QueryResult<
  TopTracksByArtistQuery,
  TopTracksByArtistQueryVariables
>
export const TrackYoutubeIdsDocument = gql`
  query trackYoutubeIds(
    $artistName: String!
    $trackTitle: String!
    $limit: Int
  ) {
    trackYoutubeIds(
      artistName: $artistName
      trackTitle: $trackTitle
      limit: $limit
    )
  }
`

/**
 * __useTrackYoutubeIdsQuery__
 *
 * To run a query within a React component, call `useTrackYoutubeIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackYoutubeIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackYoutubeIdsQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *      trackTitle: // value for 'trackTitle'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTrackYoutubeIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TrackYoutubeIdsQuery,
    TrackYoutubeIdsQueryVariables
  >
) {
  return Apollo.useQuery<TrackYoutubeIdsQuery, TrackYoutubeIdsQueryVariables>(
    TrackYoutubeIdsDocument,
    baseOptions
  )
}
export function useTrackYoutubeIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TrackYoutubeIdsQuery,
    TrackYoutubeIdsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    TrackYoutubeIdsQuery,
    TrackYoutubeIdsQueryVariables
  >(TrackYoutubeIdsDocument, baseOptions)
}
export type TrackYoutubeIdsQueryHookResult = ReturnType<
  typeof useTrackYoutubeIdsQuery
>
export type TrackYoutubeIdsLazyQueryHookResult = ReturnType<
  typeof useTrackYoutubeIdsLazyQuery
>
export type TrackYoutubeIdsQueryResult = Apollo.QueryResult<
  TrackYoutubeIdsQuery,
  TrackYoutubeIdsQueryVariables
>
