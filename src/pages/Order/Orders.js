import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Product } from '../../components/Product'
import { toast } from 'react-toastify'
export const Orders = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [Orders, setOrders] = useState([])
  const [sort, setSort] = useState('')
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/orders/records?sort=${sort}&page=${page}&perPage=5`
      )
      setOrders(data.items)
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
        <Link to={'/CreeCommande'}>
          <button className="Add" style={{ width: '160px', float: 'right' }}>
            Cree une commande
          </button>
        </Link>
        <div className="Clients">
          <table className="table mt-3 table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Client</th>
                <th scope="col">nombre des items</th>
                <th scope="col">total</th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((product) => {
                console.log(product)
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
