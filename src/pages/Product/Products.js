import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Product } from '../../components/Product'
import { toast } from 'react-toastify'
export const Products = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('')

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/products/records?sort=${sort}&page=${page}&perPage=5`
      )
      setProducts(data.items)
      setPage(data.page)
      setTotalPages(data.totalPages)
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getData()
  }, [page, sort])
  return (
    <>
      <div className="container">
        <Link to={'/AjouterProduit'}>
          <button className="Add" style={{ width: '150px', float: 'right' }}>
            ajouter un produit
          </button>
        </Link>
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
              {products.map((product) => {
                return <Product product={product} />
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {page === 1 ? (
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
