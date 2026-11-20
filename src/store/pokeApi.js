import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetchPokemons } from '../api/fetchPokemons'
import { fetchPokemonTypes } from '../api/fetchPokemonTypes'
import { fetchPokemonDetails } from '../api/fetchPokemonDetails'

const CACHE_LIFETIME_SECONDS = 300

function toQueryFn(fetcher) {
  return async (arg, { signal }) => {
    try {
      return { data: await fetcher(arg, { signal }) }
    } catch (error) {
      return { error: { status: error.status ?? null, message: error.message } }
    }
  }
}

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: CACHE_LIFETIME_SECONDS,
  endpoints: (build) => ({
    getPokemons: build.query({ queryFn: toQueryFn(fetchPokemons) }),
    getPokemonTypes: build.query({ queryFn: toQueryFn(fetchPokemonTypes) }),
    getPokemonDetails: build.query({ queryFn: toQueryFn(fetchPokemonDetails) }),
  }),
})

export const { useGetPokemonsQuery, useGetPokemonTypesQuery, useGetPokemonDetailsQuery } = pokeApi
