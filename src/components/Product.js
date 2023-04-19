import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = ({ product }) => {
  const navigate = useNavigate()
  const GotoPage = () => {
    navigate('/Product', { state: product })
  }
  const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`

  return (
    <>
      <tr onClick={GotoPage}>
        <td>
          <img
            src={path}
            class="img-thumbnail"
            style={{ width: '100px' }}
            alt="Img"
          />
        </td>
        <td style={{ verticalAlign: 'middle' }}>{product.nom}</td>
        <td style={{ verticalAlign: 'middle' }}>{product.marque}</td>
        <td style={{ verticalAlign: 'middle' }}>{product.description}</td>
        <td style={{ verticalAlign: 'middle' }}>{product.prix}</td>
        <td style={{ verticalAlign: 'middle' }}>{product.objetsRestants}</td>
      </tr>
    </>
  )
}
