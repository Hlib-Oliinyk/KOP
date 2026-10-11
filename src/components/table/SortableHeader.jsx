function SortableHeader({ label, field, sortField, sortDirection, onSort }) {
  const isActive = field === sortField

  return (
    <th className="sortable-header" onClick={() => onSort(field)}>
      {label}
      {isActive && <span className={`sort-arrow sort-arrow--${sortDirection}`} />}
    </th>
  )
}

export default SortableHeader
