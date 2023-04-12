import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Clients.css'
import { Client } from '../components/Client'
export const Clients = () => {
  const [page, setPage] = useState(1)
  const [clients, setClients] = useState([])
  const pb = new PocketBase('http://127.0.0.1:8090')
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/clients/records?page=${page}&perPage=20`
      )
      setClients(data.items)
    } catch (error) {}
  }
  useEffect(() => {
    getData()
  })
  return (
    <>
      <div className="container">
        <Link to={'/AjouterClient'}>
          <button className="Add" style={{ width: '120px', float: 'right' }}>
            Ajouter Client
          </button>
        </Link>
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
              {clients.map((client) => {
                return <Client client={client} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
