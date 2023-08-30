"use client"

import {useState} from 'react'


import SearchManufacturer from "../SearchManufacturer"

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const handleSearchBar = () =>{}

  return (
    <form className='searchbar' onSubmit={handleSearchBar}>
      <div className='searchbar__item'>
        <SearchManufacturer 
        manufacturer ={manufacturer}
        setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
