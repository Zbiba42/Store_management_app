import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import axios from 'axios'

import { OrderProduct } from '../../components/OrderProduct'

export const OrderPage = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const location = useLocation()
  const [Client, setClient] = useState()
  const [Products, setProducts] = useState([])
  const order = location.state

  const getClient = async () => {
    const client = await axios.get(
      `http://127.0.0.1:8090/api/collections/clients/records/${order.client}`
    )
    setClient(client.data)
  }
  const getProducts = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8090/api/collections/orders/records/${order.id}`
    )
    const products = JSON.parse(data.produits)
    setProducts(products)
  }
  useEffect(() => {
    getClient()
    getProducts()
  }, [isUpdating])
  return (
    <>
      <div className="container">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title text-center h3 fw-bold m-4">{''}</h5>
            <table class="table mt-4">
              <tbody>
                <tr>
                  <td class="fw-bold">Date</td>
                  <td>{order.date}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Client</td>
                  {Client ? <td>{Client.nom + ' ' + Client.prenom}</td> : ''}
                </tr>
                <tr>
                  <td class="fw-bold">Produits</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Description</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Quantité</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Products.map((product) => {
                  return <OrderProduct key={product.id} product={product} />
                })}
              </tbody>
            </table>
          </div>
          {/* <div class="card-footer text-muted">
            <button
              class="btn btn-primary m-1"
              onClick={() => {
                setIsUpdating(true)
              }}
            >
              Modifier
            </button>

      
          </div> */}
        </div>
      </div>
    </>
  )
}
