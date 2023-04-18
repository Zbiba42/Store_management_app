import React, { useRef } from 'react'
import PocketBase from 'pocketbase'
import { toast } from 'react-toastify'

export const AddProduct = () => {
  const productRef = useRef({
    image: null,
    nom: '',
    Marque: '',
    description: '',
    prix: 0,
    objetsRestants: 0,
  })

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    // Accessing the form data using the ref object's current value
    const productData = {
      images: productRef.current.image.files[0],
      nom: productRef.current.nom.value,
      marque: productRef.current.Marque.value,
      description: productRef.current.description.value,
      prix: parseInt(productRef.current.prix.value),
      objetsRestants: parseInt(productRef.current.objetsRestants.value),
    }
    let isValid = true

    // Perform validation on the productData object
    if (!productData.images) {
      toast.error("L'image ne peut pas être vide ! ")
      isValid = false
    }

    if (productData.nom === '') {
      toast.error('Le nom ne peut pas être vide ! ')
      isValid = false
    }

    if (productData.marque === '') {
      toast.error('La marque ne peut pas être vide ! ')
      isValid = false
    }

    if (productData.description === '') {
      toast.error('La description ne peut pas être vide ! ')
      isValid = false
    }

    if (isNaN(productData.prix) || productData.prix <= 0) {
      toast.error('Le prix doit être un nombre positif ! ')
      isValid = false
    }

    if (isNaN(productData.objetsRestants) || productData.objetsRestants < 0) {
      toast.error(
        "Le nombre d'objets restants doit être un nombre positif ou nul ! "
      )
      isValid = false
    }

    // Check if the productData is valid
    if (isValid) {
      const formData = new FormData()
      formData.append('image', productData.images)
      formData.append('nom', productData.nom)
      formData.append('marque', productData.marque)
      formData.append('description', productData.description)
      formData.append('prix', productData.prix)
      formData.append('objetsRestants', productData.objetsRestants)
      console.log(formData)
      const pb = new PocketBase('http://127.0.0.1:8090')
      try {
        const record = await pb.collection('products').create(formData)
        toast.success('produit créé avec succès !')
      } catch (error) {
        console.log()
        toast.error(error.message)
      }
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              ref={(ref) => (productRef.current.nom = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Marque">Marque</label>
            <input
              type="text"
              className="form-control"
              id="Marque"
              ref={(ref) => (productRef.current.Marque = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              ref={(ref) => (productRef.current.description = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prix">Prix</label>
            <input
              type="number"
              className="form-control"
              id="prix"
              ref={(ref) => (productRef.current.prix = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="objetsRestants">Objets Restants</label>
            <input
              type="number"
              className="form-control"
              id="objetsRestants"
              ref={(ref) => (productRef.current.objetsRestants = ref)}
            />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}
