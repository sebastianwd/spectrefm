import React, { useState, useEffect, useCallback } from 'react'
import { Autocomplete, AutocompleteProps } from '@material-ui/lab'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import {
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { Search as SearchIcon } from '@material-ui/icons'
import { useApolloClient } from '@apollo/react-hooks'
import { searchArtistsQuery, artistQuery } from '@gql/queries'
import { SearchArtistsQuery, ArtistQuery } from '@generated/graphql'
import { debounce } from 'lodash'
import { cookies } from '@utils'
import { cookieNames } from '@constants'

interface Props
  extends Omit<
    AutocompleteProps<any, false, false, true>,
    'renderInput' | 'options'
  > {
  placeholder?: string
}

type Inputs = {
  query: string
}

const SearchAutocomplete: React.FC<Props> = (props) => {
  const { className, placeholder, ...rest } = props

  const { register, handleSubmit, setValue, watch } = useForm<Inputs>({
    defaultValues: { query: '' },
  })

  const router = useRouter()

  const client = useApolloClient()

  const query = watch('query')

  const [loading, setLoading] = useState(false)

  const [options, setOptions] = useState<string[]>([])

  const onSubmit = async (data: Inputs) => {
    setLoading(true)
    const reponse = await client.query<ArtistQuery>({
      query: artistQuery,
      variables: { artistName: data.query },
    })

    cookies().set(cookieNames.ARTIST_SEARCH, reponse.data.artist)

    router.push('/artist/[name]', `/artist/${reponse.data?.artist?.name}`)

    setLoading(false)
  }

  const onSearch = async (value: string) => {
    setLoading(true)
    try {
      if (!value) {
        setOptions([])

        return
      }

      const { data } = await client.query<SearchArtistsQuery>({
        query: searchArtistsQuery,
        variables: { artistName: value },
      })

      setOptions(data.searchArtists)
    } catch (e) {
      console.log('object', e)
    } finally {
      setLoading(false)
    }
  }

  const delayedSearch = useCallback(debounce(onSearch, 400), [])

  useEffect(() => {
    register('query', { required: true })
  }, [])

  useEffect(() => {
    delayedSearch(query)

    return delayedSearch.cancel
  }, [query])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Autocomplete
        freeSolo
        options={options}
        onChange={(_, selectedValue) => {
          setValue('query', selectedValue)

          handleSubmit(onSubmit)()
        }}
        fullWidth
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder={placeholder}
            name="query"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target

              setValue('query', value)
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="execute search"
                    onClick={handleSubmit(onSubmit)}
                    onMouseDown={handleSubmit(onSubmit)}
                  >
                    {loading ? <CircularProgress size={24} /> : <SearchIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
        {...rest}
      />
    </form>
  )
}

const StyledTextField = styled(TextField)`
  fieldset {
    border: none;
  }

  .MuiInputBase-root {
    background-color: ${(props) => props.theme.palette.secondary.light};
    border-radius: ${(props) => props.theme.spacing(3)}px;
    padding-left: ${(props) => props.theme.spacing(2.5)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px !important;
  }

  input {
    height: ${(props) => props.theme.spacing(4)}px;
    ${(props): any => ({ ...props.theme.typography.h6 })};
    font-weight: 400;
  }
`

export default SearchAutocomplete