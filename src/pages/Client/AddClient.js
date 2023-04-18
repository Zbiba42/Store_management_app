import React, { useState } from 'react'
import PocketBase from 'pocketbase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const AddClient = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    age: '',
    sexe: 'Masculin',
    cin: '',
  })
  const navigate = useNavigate()
  const pb = new PocketBase('http://127.0.0.1:8090')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validated = {}

    // Perform validation on the form data
    if (formData.nom === '') {
      toast.error('Le nom ne peut pas être vide ! ')
    } else {
      validated.nom = true
    }

    if (formData.prenom === '') {
      toast.error('Le prénom ne peut pas être vide ! ')
    } else {
      validated.prenom = true
    }

    if (formData.email === '') {
      toast.error("L'email ne peut pas être vide ! ")
    } else {
      validated.email = true
    }

    if (formData.age === '') {
      toast.error("L'âge ne peut pas être vide ! ")
    } else {
      validated.age = true
    }

    if (formData.cin === '') {
      toast.error('Le CIN ne peut pas être vide ! ')
    } else {
      validated.cin = true
    }

    // Check if the form is valid
    if (
      validated.cin === true &&
      validated.age === true &&
      validated.email === true &&
      validated.prenom === true &&
      validated.nom === true
    ) {
      try {
        const record = await pb.collection('clients').create(formData)
        toast.success('client créé avec succès')
      } catch (error) {
        toast.error(error.message)
      }
      navigate('/Clients')
      // Reset form data
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        age: '',
        sexe: 'Masculin',
        cin: '',
      })
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3 className="form-title">Ajouter Client</h3>
          <div className="form-group">
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom:</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Âge:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sexe">Sexe:</label>
            <select
              className="form-control"
              id="sexe"
              name="sexe"
              value={formData.sexe}
              onChange={handleChange}
            >
              <option value="Masculin">Masculin</option>
              <option value="Féminin">Féminin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cin">CIN:</label>
            <input
              type="text"
              className="form-control"
              id="cin"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ajouter
          </button>
        </form>
      </div>
    </>
  )
}
