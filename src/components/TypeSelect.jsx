function TypeSelect({ types, selectedType, onSelectType, allLabel }) {
  return (
    <select
      className="type-select"
      value={selectedType}
      onChange={(event) => onSelectType(event.target.value)}
    >
      <option value={allLabel}>{allLabel}</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}

export default TypeSelect
