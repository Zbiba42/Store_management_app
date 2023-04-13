import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Client } from '../components/Client'
import { Product } from '../components/Product'

export const SearchResults = () => {
  const { state } = useLocation()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [results, setResults] = useState()
  const [sort, setSort] = useState('')
  const Search = async () => {
    if (state.Collection === 'clients') {
      const results = await axios.get(
        `http://127.0.0.1:8090/api/collections/${state.Collection}/records?page=${page}&perPage=5&filter=(nom~'${state.searchTerm}' || prenom~'${state.searchTerm}' || email~'${state.searchTerm}')`
      )
      setResults(results.data.items)
      setPage(results.data.page)
      setTotalPages(results.data.totalPages)
    } else if (state.Collection === 'products') {
      const results = await axios.get(
        `http://127.0.0.1:8090/api/collections/${state.Collection}/records?sort=${sort}&page=${page}&perPage=5&filter=(nom~'${state.searchTerm}' || marque~'${state.searchTerm}' || description~'${state.searchTerm}')`
      )
      setResults(results.data.items)
      setPage(results.data.page)
      setTotalPages(results.data.totalPages)
    }
  }
  useEffect(() => {
    Search()
  }, [state, page, sort])
  if (results) {
    if (state.Collection === 'clients') {
      return (
        <>
          <div className="container">
            <div className="Clients">
              <table class="table mt-3 table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Sexe</th>
                    <th scope="col">CIN</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((client) => {
                    return <Client client={client} />
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              {page == 1 ? (
                <button className="pagination-btn" disabled="true">
                  &lt; Go back
                </button>
              ) : (
                <button
                  className="pagination-btn"
                  onClick={() => {
                    setPage(page - 1)
                  }}
                >
                  &lt; Go back
                </button>
              )}
              {page >= totalPages ? (
                <button className="pagination-btn" disabled="true">
                  Go next &gt;
                </button>
              ) : (
                <button
                  className="pagination-btn"
                  onClick={() => {
                    setPage(page + 1)
                  }}
                >
                  Go next &gt;
                </button>
              )}
            </div>
          </div>
        </>
      )
    } else if (state.Collection === 'products') {
      return (
        <>
          <div className="container">
            <div className="Clients">
              <table class="table mt-3 table-hover">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Marque</th>
                    <th scope="col">Description</th>
                    {/* PRIX */}
                    {sort === '' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-prix')
                        }}
                      >
                        Prix
                      </th>
                    ) : sort === '-prix' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('+prix')
                        }}
                      >
                        Prix
                        <i
                          class="fa-solid fa-arrow-down-long fa-sm"
                          style={{ marginLeft: '5px' }}
                        ></i>
                      </th>
                    ) : sort === '+prix' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-prix')
                        }}
                      >
                        Prix
                        <i
                          class="fa-solid fa-arrow-up-long fa-sm"
                          style={{ marginLeft: '5px' }}
                        ></i>
                      </th>
                    ) : (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-prix')
                        }}
                      >
                        Prix
                      </th>
                    )}
                    {/* OBJECTS RESTANTS */}
                    {sort === '' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-objetsRestants')
                        }}
                      >
                        Objets Restants
                      </th>
                    ) : sort === '-objetsRestants' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('+objetsRestants')
                        }}
                      >
                        Objets Restants
                        <i
                          class="fa-solid fa-arrow-down-long fa-sm"
                          style={{ marginLeft: '5px' }}
                        ></i>
                      </th>
                    ) : sort === '+objetsRestants' ? (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-objetsRestants')
                        }}
                      >
                        Objets Restants
                        <i
                          class="fa-solid fa-arrow-up-long fa-sm"
                          style={{ marginLeft: '5px' }}
                        ></i>
                      </th>
                    ) : (
                      <th
                        style={{ cursor: 'pointer' }}
                        scope="col"
                        onClick={() => {
                          setSort('-objetsRestants')
                        }}
                      >
                        Objets Restants
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {results.map((product) => {
                    return <Product product={product} />
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              {page == 1 ? (
                <button className="pagination-btn" disabled="true">
                  &lt; Go back
                </button>
              ) : (
                <button
                  className="pagination-btn"
                  onClick={() => {
                    setPage(page - 1)
                  }}
                >
                  &lt; Go back
                </button>
              )}
              {page >= totalPages ? (
                <button className="pagination-btn" disabled="true">
                  Go next &gt;
                </button>
              ) : (
                <button
                  className="pagination-btn"
                  onClick={() => {
                    setPage(page + 1)
                  }}
                >
                  Go next &gt;
                </button>
              )}
            </div>
          </div>
        </>
      )
    }
  }
}
