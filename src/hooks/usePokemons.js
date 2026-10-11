import { useEffect, useState } from 'react'
import { fetchPokemons } from '../api/pokemonApi'

const POKEMON_COUNT = 12

export function usePokemons() {
  const [pokemons, setPokemons] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let isActive = true

    fetchPokemons(POKEMON_COUNT)
      .then((result) => {
        if (!isActive) return
        setPokemons(result)
        setStatus(result.length === 0 ? 'empty' : 'success')
      })
      .catch((err) => {
        if (!isActive) return
        setError(err.message)
        setStatus('error')
      })

    return () => {
      isActive = false
    }
  }, [reloadKey])

  const reload = () => {
    setStatus('loading')
    setError(null)
    setReloadKey((key) => key + 1)
  }

  return { pokemons, status, error, reload }
}
