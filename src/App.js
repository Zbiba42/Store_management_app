import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Clients } from './pages/Client/Clients'
import { Nav } from './components/Nav'
import { AddClient } from './pages/Client/AddClient'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClientPage } from './pages/Client/ClientPage'
import { Products } from './pages/Product/Products'
import { AddProduct } from './pages/Product/AddProduct'
import { ProductPage } from './pages/Product/ProductPage'
import { LogIn } from './pages/logIn'
import { SearchResults } from './pages/SearchResults'
import { Orders } from './pages/Order/Orders'
import { AddOrder } from './pages/Order/AddOrder'
import { OrderPage } from './pages/Order/OrderPage'
import { ClientOrders } from './pages/Client/ClientOrders'
export const Token = createContext(null)
function App() {
  const [token, setToken] = useState()
  useEffect(() => {
    setToken(sessionStorage.getItem('Token'))
  })
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Token.Provider value={setToken}>
          {token == null ? (
            ''
          ) : (
            <>
              <Sidebar />
              <Nav />
            </>
          )}
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route
              path="/Clients"
              element={token !== null ? <Clients /> : <LogIn />}
            />
            <Route
              path="/AjouterClient"
              element={token !== null ? <AddClient /> : <LogIn />}
            />
            <Route
              path="/Client"
              element={token !== null ? <ClientPage /> : <LogIn />}
            />
            <Route
              path="/Produits"
              element={token !== null ? <Products /> : <LogIn />}
            />
            <Route
              path="/AjouterProduit"
              element={token !== null ? <AddProduct /> : <LogIn />}
            />
            <Route
              path="/Product"
              element={token !== null ? <ProductPage /> : <LogIn />}
            />
            <Route
              path="/Résultats"
              element={token !== null ? <SearchResults /> : <LogIn />}
            />
            <Route
              path="/Commandes"
              element={token !== null ? <Orders /> : <LogIn />}
            />
            <Route
              path="/CreeCommande"
              element={token !== null ? <AddOrder /> : <LogIn />}
            />
            <Route
              path="/Commande"
              element={token !== null ? <OrderPage /> : <LogIn />}
            />
            <Route
              path="/ClientCommandes"
              element={token !== null ? <ClientOrders /> : <LogIn />}
            />
          </Routes>
        </Token.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
