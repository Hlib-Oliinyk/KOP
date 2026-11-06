const SPRITES_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

export function getIdFromUrl(url) {
  return Number(url.split('/').filter(Boolean).pop())
}

export function getSpriteUrl(id) {
  return `${SPRITES_URL}/${id}.png`
}
