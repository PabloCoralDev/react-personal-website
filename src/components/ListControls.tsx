import { useState } from 'react'

export interface FilterGroup {
  label: string
  options: Array<{ value: string; label: string }>
  value: string
  onChange: (value: string) => void
}

interface ListControlsProps {
  search: string
  onSearch: (value: string) => void
  placeholder: string
  filters: FilterGroup[]
}

/** Slim search bar + filter toggle that opens text-only filter rows. Shared by Piano and Library. */
export function ListControls({ search, onSearch, placeholder, filters }: ListControlsProps) {
  const [open, setOpen] = useState(false)
  // The first option of each group is its "All" reset.
  const active = filters.filter((f) => f.value !== f.options[0].value).length

  return (
    <>
      <div className="list-controls">
        <label className="list-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder={placeholder}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label={placeholder}
          />
        </label>

        <button
          className={`filter-toggle${open || active ? ' active' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={`Filters${active ? ` (${active} active)` : ''}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h18M6.5 12h11M10 18h4" />
          </svg>
          {active > 0 && <span className="filter-count">{active}</span>}
        </button>
      </div>

      {open && (
        <div className="filter-panel">
          {filters.map((group) => (
            <div key={group.label} className="filter-row">
              <span className="filter-label">{group.label}</span>
              {group.options.map((o) => (
                <button
                  key={o.value}
                  className={`filter-option${group.value === o.value ? ' active' : ''}`}
                  onClick={() => group.onChange(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
