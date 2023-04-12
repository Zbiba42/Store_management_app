import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Client } from '../../components/Client'
import { Product } from '../../components/Product'
export const Products = () => {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const pb = new PocketBase('http://127.0.0.1:8090')
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/products/records?page=${page}&perPage=20`
      )
      console.log(data.items)
      setProducts(data.items)
    } catch (error) {}
  }
  useEffect(() => {
    getData()
  }, [])
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
                <th scope="col">Prix</th>
                <th scope="col">Objets Restants</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <Product product={product} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
