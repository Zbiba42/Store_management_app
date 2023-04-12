import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PocketBase from 'pocketbase'
import { toast } from 'react-toastify'
export const ProductPage = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const location = useLocation()
  const [product, setProduct] = useState()
  const navigate = useNavigate()
  const { id } = location.state
  const productRef = useRef({
    image: null,
    nom: '',
    Marque: '',
    description: '',
    prix: 0,
    objetsRestants: 0,
  })
  const pb = new PocketBase('http://127.0.0.1:8090')
  const getProduct = async () => {
    const record = await pb.collection('products').getOne(id)
    setProduct(record)
  }
  const updateProduct = async () => {
    const productData = {
      image: productRef.current.image.files[0],
      nom: productRef.current.nom.value,
      marque: productRef.current.Marque.value,
      description: productRef.current.description.value,
      prix: parseInt(productRef.current.prix.value),
      objetsRestants: parseInt(productRef.current.objetsRestants.value),
    }

    if (productData.image !== undefined) {
      const formData = new FormData()
      formData.append('image', productData.image)
      formData.append('nom', productData.nom)
      formData.append('marque', productData.marque)
      formData.append('description', productData.description)
      formData.append('prix', productData.prix)
      formData.append('objetsRestants', productData.objetsRestants)

      try {
        const record = await pb
          .collection('products')
          .update(product.id, formData)
        toast.success('produit modifier avec succès !')
        setIsUpdating(false)
      } catch (error) {
        console.log()
        toast.error(error.message)
      }
    } else {
      const formData = new FormData()
      formData.append('nom', productData.nom)
      formData.append('marque', productData.marque)
      formData.append('description', productData.description)
      formData.append('prix', productData.prix)
      formData.append('objetsRestants', productData.objetsRestants)
      console.log(formData)

      try {
        const record = await pb
          .collection('products')
          .update(product.id, formData)
        toast.success('produit modifier avec succès !')
        setIsUpdating(false)
      } catch (error) {
        console.log()
        toast.error(error.message)
      }
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  const deleteProduct = async () => {
    try {
      await pb.collection('products').delete(product.id)
      navigate('/Produits')
      toast.success('produit supprimé avec succès')
    } catch (error) {
      toast.error(error.message)
    }
  }
  if (product) {
    const path = `http://127.0.0.1:8090/api/files/iwkp5worhbpetih/${product.id}/${product.image}`
    return (
      <>
        <div className="container">
          <div class="card ">
            {isUpdating ? (
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">
                  Image
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  ref={(ref) => (productRef.current.image = ref)}
                />
              </div>
            ) : (
              <img
                src={path}
                className="card-img-top mx-auto"
                alt="Product Image"
                style={{ width: '300px' }}
              />
            )}

            <div class="card-body text-center">
              <table class="table ">
                <tbody>
                  <tr>
                    <td class="fw-bold">Nom</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          className="form-control"
                          id="nom"
                          defaultValue={product.nom}
                          ref={(ref) => (productRef.current.nom = ref)}
                        />
                      ) : (
                        product.nom
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Marque</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          className="form-control"
                          id="Marque"
                          defaultValue={product.marque}
                          ref={(ref) => (productRef.current.Marque = ref)}
                        />
                      ) : (
                        product.marque
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Description</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          defaultValue={product.description}
                          ref={(ref) => (productRef.current.description = ref)}
                        />
                      ) : (
                        product.description
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Prix</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          className="form-control"
                          id="prix"
                          defaultValue={product.prix}
                          ref={(ref) => (productRef.current.prix = ref)}
                        />
                      ) : (
                        product.prix
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Objets Restants</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          className="form-control"
                          id="prix"
                          defaultValue={product.objetsRestants}
                          ref={(ref) =>
                            (productRef.current.objetsRestants = ref)
                          }
                        />
                      ) : (
                        product.objetsRestants
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              {/* Update */}
              {isUpdating ? (
                <button class="btn btn-primary m-1" onClick={updateProduct}>
                  Sauvegarder
                </button>
              ) : (
                <button
                  class="btn btn-primary m-1"
                  onClick={() => {
                    setIsUpdating(true)
                  }}
                >
                  Modifier
                </button>
              )}
              {/* delete */}

              {isUpdating ? (
                <button
                  class="btn btn-danger"
                  onClick={() => {
                    setIsUpdating(false)
                  }}
                >
                  Annuler
                </button>
              ) : (
                <button class="btn btn-danger" onClick={deleteProduct}>
                  Suprimmer
                </button>
              )}

              <button
                className="btn btn-success float-right"
                style={{ float: 'right' }}
              >
                Voir Commandes
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
