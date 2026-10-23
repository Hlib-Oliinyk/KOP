const BASE_URL = 'https://pokeapi.co/api/v2'

async function request(url, signal) {
  try {
    return await fetch(url, { signal })
  } catch (error) {
    throw new Error("Не вдалося з'єднатися з PokeAPI", { cause: error })
  }
}

export async function fetchJson(path, signal) {
  const response = await request(`${BASE_URL}${path}`, signal)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити дані з PokeAPI (статус ${response.status})`)
  }

  return response.json()
}
