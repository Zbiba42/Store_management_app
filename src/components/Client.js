import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Client = ({ client }) => {
  const navigate = useNavigate()
  const GotoPage = () => {
    navigate('/Client', { state: client })
  }
  return (
    <>
      <tr onClick={GotoPage}>
        <td>{client.nom}</td>
        <td>{client.prenom}</td>
        <td>{client.email}</td>
        <td>{client.age}</td>
        <td>{client.sexe}</td>
        <td>{client.cin}</td>
      </tr>
    </>
  )
}
