import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PocketBase from 'pocketbase'
import { toast } from 'react-toastify'

export const ClientPage = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const location = useLocation()
  const [client, setClient] = useState()
  const { id } = location.state
  const navigate = useNavigate()
  const Data = useRef({})
  const pb = new PocketBase('http://127.0.0.1:8090')
  const getClinet = async () => {
    const record = await pb.collection('clients').getOne(id)
    setClient(record)
  }
  const updateClient = async () => {
    const data = Object.keys(Data.current).reduce((acc, key) => {
      acc[key] = Data.current[key].value
      return acc
    }, {})
    try {
      await pb.collection('clients').update(client.id, data)
      toast.success('client mis à jour avec succès')
      setIsUpdating(false)
    } catch (error) {
      toast.error(error)
    }
  }

  const deleteClient = async () => {
    try {
      await pb.collection('clients').delete(client.id)
      navigate('/Clients')
      toast.success('client supprimé avec succès')
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getClinet()
  }, [isUpdating])
  if (client) {
    return (
      <>
        <div className="container">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title text-center h3 fw-bold m-4">
                {isUpdating ? (
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">
                        Nom et prenom
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      defaultValue={client.nom}
                      ref={(ref) => (Data.current.nom = ref)}
                    />
                    <input
                      type="text"
                      class="form-control"
                      defaultValue={client.prenom}
                      ref={(ref) => (Data.current.prenom = ref)}
                    />
                  </div>
                ) : (
                  client.nom + ' ' + client.prenom
                )}
              </h5>
              <table class="table mt-4">
                <tbody>
                  <tr>
                    <td class="fw-bold">Email</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="email"
                          class="form-control"
                          defaultValue={client.email}
                          ref={(ref) => (Data.current.email = ref)}
                        />
                      ) : (
                        client.email
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Age</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="number"
                          class="form-control"
                          defaultValue={client.age}
                          ref={(ref) => (Data.current.age = ref)}
                        />
                      ) : (
                        client.age
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Sexe</td>
                    <td>
                      {isUpdating ? (
                        <select
                          class="form-control"
                          id="sexe"
                          name="sexe"
                          defaultValue={client.sexe}
                          ref={(ref) => (Data.current.sexe = ref)}
                        >
                          <option value="Masculin">Masculin</option>
                          <option value="Féminin">Féminin</option>
                        </select>
                      ) : (
                        client.sexe
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold">CIN</td>
                    <td>
                      {isUpdating ? (
                        <input
                          type="text"
                          class="form-control"
                          defaultValue={client.cin}
                          ref={(ref) => (Data.current.cin = ref)}
                        />
                      ) : (
                        client.cin
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              {isUpdating ? (
                <button class="btn btn-primary m-1" onClick={updateClient}>
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
                <button class="btn btn-danger" onClick={deleteClient}>
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
