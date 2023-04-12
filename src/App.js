import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Clients } from './pages/Client/Clients'
import { Nav } from './components/Nav'
import { AddClient } from './pages/Client/AddClient'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClientPage } from './pages/Client/ClientPage'
import { Products } from './pages/Product/Products'
import { AddProduct } from './pages/Product/AddProduct'
import { Product } from './components/Product'
import { ProductPage } from './pages/Product/ProductPage'
import { LogIn } from './pages/logIn'
function App() {
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

        <Sidebar />
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/AjouterClient" element={<AddClient />} />
          <Route path="/Client" element={<ClientPage />} />
          <Route path="/Produits" element={<Products />} />
          <Route path="/AjouterProduit" element={<AddProduct />} />
          <Route path="/Product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
