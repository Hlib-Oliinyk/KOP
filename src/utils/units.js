export function metersToFeetInches(meters) {
  const totalInches = meters * 39.3701
  const feet = Math.floor(totalInches / 12)
  const inches = Math.round(totalInches % 12)
  return `${feet}'${inches}"`
}

export function kgToLbs(kg) {
  return Math.round(kg * 2.20462 * 10) / 10
}
