import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  const navigate = useNavigate()
  const searchInput = useRef()
  const SearchCollection = useRef()
  const Search = async () => {
    const searchTerm = searchInput.current.value
    const Collection = SearchCollection.current.value
    navigate('/Résultats', {
      state: { searchTerm: searchTerm, Collection: Collection },
    })
  }

  return (
    <>
      <div className="navBar">
        <div className="menu">
          <select name="" id="" ref={SearchCollection}>
            <option value="clients">Client</option>
            <option value="products">Produit</option>
          </select>
        </div>

        <input
          className="search"
          type="text"
          name=""
          id=""
          placeholder="Search"
          ref={searchInput}
        />
        <i className="fa-solid fa-magnifying-glass" onClick={Search}></i>
      </div>
    </>
  )
}
