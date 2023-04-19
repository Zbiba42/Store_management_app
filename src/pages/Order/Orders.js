import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Order } from '../../components/Order'
export const Orders = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [Orders, setOrders] = useState([])
  const [sort, setSort] = useState('')
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/orders/records?sort=+updated&page=${page}&perPage=5`
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
              {Orders.map((order) => {
                return <Order order={order} key={order.id} />
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
