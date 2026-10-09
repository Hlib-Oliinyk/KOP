import { useEffect, useState } from 'react'
import { fetchPokemons } from '../api/pokemonApi'

const POKEMON_COUNT = 12

export function usePokemons() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let isActive = true

    fetchPokemons(POKEMON_COUNT)
      .then((result) => {
        if (isActive) setPokemons(result)
      })
      .catch((err) => {
        if (isActive) setError(err.message)
      })
      .finally(() => {
        if (isActive) setIsLoading(false)
      })

    return () => {
      isActive = false
    }
  }, [reloadKey])

  const reload = () => {
    setIsLoading(true)
    setError(null)
    setReloadKey((key) => key + 1)
  }

  return { pokemons, isLoading, error, reload }
}
