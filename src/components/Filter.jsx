import React from 'react'

function Filter({ filter, clearFilter, clearFilterItem }) {
  const filterItems = filter.map((item) => {
    if (item !== undefined) {
      return (
        <>
          <div key={filter} className='filter-item'>
            <span className='filter-item-name'>{item}</span>
            <img
              onClick={() => clearFilterItem(item)}
              className='filter-remove-icon'
              src='/images/icon-remove.svg'
              alt='Remove Icon'
            />
          </div>
        </>
      )
    } else {
      return ''
    }
  })
  return (
    <div>
      {filter.length === 0 ? null : (
        <div className='search-filter'>
          <div className='items-list'>{filterItems}</div>
          <button onClick={clearFilter} className='clear-btn'>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default Filter
