import React from 'react'

export const OrderProduct = ({ product }) => {
  const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`
  return (
    <>
      <tr>
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
        <td style={{ verticalAlign: 'middle' }}>{product.quantity}</td>
      </tr>
    </>
  )
}
