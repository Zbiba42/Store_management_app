import React from 'react'

export const PickedProduct = ({
  product,
  pickedProducts,
  setPickedProducts,
}) => {
  const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`
  const increaseQuantity = () => {
    const updatedPickedProducts = [...pickedProducts] // create a copy of pickedProducts array
    const productIndex = updatedPickedProducts.findIndex(
      (prod) => prod === product
    ) // find the index of the product you want to modify
    if (productIndex !== -1) {
      // if product is found in the array
      updatedPickedProducts[productIndex].quantity++ // decrease the quantity by 1
      setPickedProducts(updatedPickedProducts) // update the pickedProducts state with the modified array
    }
  }
  const decreaseQuantity = () => {
    const updatedPickedProducts = [...pickedProducts] // create a copy of pickedProducts array
    const productIndex = updatedPickedProducts.findIndex(
      (prod) => prod === product
    ) // find the index of the product you want to modify
    if (product.quantity > 0) {
      updatedPickedProducts[productIndex].quantity-- // decrease the quantity by 1
      setPickedProducts(updatedPickedProducts) // update the pickedProducts state with the modified array
    }
  }
  const deleteProduct = () => {
    const updatedPickedProducts = pickedProducts.filter(
      (prod) => prod.id !== product.id
    ) // filter out the product to be deleted
    setPickedProducts(updatedPickedProducts) // update the pickedProducts state with the filtered array
  }
  return (
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
      <td style={{ verticalAlign: 'middle' }}>
        <button
          className="btn btn-outline-secondary m-1"
          onClick={decreaseQuantity}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        {product.quantity}
        <button
          className="btn btn-outline-secondary m-1"
          onClick={increaseQuantity}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </td>
      <td style={{ verticalAlign: 'middle' }}>
        <i
          className="fa-regular fa-trash-can"
          style={{ color: '#dc1818', cursor: 'pointer' }}
          onClick={deleteProduct}
        ></i>
      </td>
    </tr>
  )
}
