import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Order = ({ order }) => {
  const [Client, setClient] = useState()
  const navigate = useNavigate()
  console.log(order)
  const getClient = async () => {
    const client = await axios.get(
      `http://127.0.0.1:8090/api/collections/clients/records/${order.client}`
    )
    setClient(client.data)
  }
  const GotoPage = () => {
    navigate('/Commande', { state: order })
  }
  useEffect(() => {
    getClient()
  }, [])
  if (Client) {
    return (
      <>
        <tr onClick={GotoPage}>
          <td scope="col">{order.date}</td>
          <td scope="col">{Client.nom + ' ' + Client.prenom}</td>
          <td scope="col">{order.produits.split('/').length - 1}</td>
          <td scope="col">{order.total + ' MAD'}</td>
        </tr>
      </>
    )
  }
}
