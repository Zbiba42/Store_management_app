import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Clients } from './pages/Clients'
import { Nav } from './components/Nav'
import { AddClient } from './pages/AddClient'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClientPage } from './pages/ClientPage'
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
          <Route path="/Clients" element={<Clients />} />
          <Route path="/AjouterClient" element={<AddClient />} />
          <Route path="/Client" element={<ClientPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
