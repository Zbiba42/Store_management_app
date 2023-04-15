import axios from 'axios'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Client } from '../../components/Client'

export const AddOrder = () => {
  const dateRef = useRef()
  const clientRef = useRef()
  const productsRef = useRef()
  const totalRef = useRef()
  // client select
  const [clients, setClients] = useState([])
  const [pickedClient, setPickedClient] = useState(false)
  // products select
  const [products, setProducts] = useState([])
  const [pickedProducts, setPickedProducts] = useState([])
  // client search and pick
  const ClinetSearch = async (e) => {
    setPickedClient(false)
    const searchTerm = e.target.value
    if (searchTerm.length >= 3) {
      const results = await axios.get(
        `http://127.0.0.1:8090/api/collections/clients/records?filter=(nom~'${searchTerm}' || prenom~'${searchTerm}' || email~'${searchTerm}')`
      )
      if (results.data.items.length > 0) {
        setClients(results.data.items)
      } else {
        toast.info('aucun client trouvé avec le nom que vous avez entré')
      }
    } else {
      setClients([])
    }
  }
  const ChooseClient = (client) => {
    clientRef.current.value = client.nom + ' ' + client.prenom
    setPickedClient(true)
  }
  //Products search and pick
  const ProductSearch = async (e) => {
    const searchTerm = e.target.value
    if (searchTerm.length >= 3) {
      const results = await axios.get(
        `http://127.0.0.1:8090/api/collections/products/records?filter=(nom~'${searchTerm}' || marque~'${searchTerm}' || description~'${searchTerm}')`
      )
      if (results.data.items.length > 0) {
        setProducts(results.data.items)
      } else {
        toast.info('aucun Produit trouvé avec le nom que vous avez entré')
      }
    } else {
      setProducts([])
    }
  }
  const ChooseProduct = (product) => {
    setPickedProducts([...pickedProducts, product])
    setProducts([])
  }
  return (
    <>
      <div className="container">
        <div className="container mt-2">
          <h2>Commande détails</h2>

          <div className="form-group">
            <label for="dateInput">Date</label>
            <input
              type="date"
              className="form-control"
              id="dateInput"
              ref={dateRef}
            />
          </div>
          <div className="form-group">
            <label for="clientInput">Client</label>
            <input
              type="text"
              className="form-control"
              id="clientInput"
              ref={clientRef}
              onChange={ClinetSearch}
            />
            {clients.length > 0 ? (
              pickedClient === false ? (
                <div
                  className="Clientdropdown-menu"
                  style={{
                    borderRadius: '7px',
                    borderLeft: '1px solid #ced4da',
                    borderBottom: '1px solid #ced4da',
                    borderRight: '1px solid #ced4da',
                    height: '200px',
                    overflow: 'scroll',
                  }}
                >
                  <table className="table table-hover">
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
                        return (
                          <tr
                            key={client.id}
                            onClick={() => ChooseClient(client)}
                          >
                            <td>{client.nom}</td>
                            <td>{client.prenom}</td>
                            <td>{client.email}</td>
                            <td>{client.age}</td>
                            <td>{client.sexe}</td>
                            <td>{client.cin}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </div>
          {/* Products select */}
          <div className="form-group">
            <label for="produitInput">Produits</label>
            <input
              type="text"
              className="form-control"
              id="produitInput"
              ref={productsRef}
              onChange={ProductSearch}
            />
            {products.length > 0 ? (
              <div
                className="Clientdropdown-menu"
                style={{
                  borderRadius: '7px',
                  borderLeft: '1px solid #ced4da',
                  borderBottom: '1px solid #ced4da',
                  borderRight: '1px solid #ced4da',
                  height: '300px',
                  overflow: 'scroll',
                }}
              >
                <table className="table table-hover">
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
                      const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`
                      return (
                        <tr
                          key={product.id}
                          onClick={() => ChooseProduct(product)}
                        >
                          <td>
                            <img
                              src={path}
                              class="img-thumbnail"
                              style={{ width: '100px' }}
                            />
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {product.nom}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {product.marque}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {product.description}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {product.prix}
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            {product.objetsRestants}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* PICKED PRODUCTS  */}
          <div className="Pickedcontainer">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Description</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Quantité</th>
                </tr>
              </thead>
              <tbody>
                {pickedProducts.map((product) => {
                  const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`

                  return (
                    <tr>
                      <td>
                        <img
                          src={path}
                          class="img-thumbnail"
                          style={{ width: '100px' }}
                        />
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>{product.nom}</td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {product.marque}
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {product.description}
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {product.prix}
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <button className="btn btn-outline-secondary">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        15
                        <button className="btn btn-outline-secondary">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="form-group">
            <label for="totalInput">Total</label>
            <input type="number" className="form-control" id="totalInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
