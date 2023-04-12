import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './sideBar.css'
export const Sidebar = () => {
  const [clicked, setClicked] = useState(false)
  const location = window.location.pathname

  return (
    <>
      <div className="sideBar">
        <div className="logoContainer">
          <div
            className="logo"
            style={{
              backgroundImage: 'url(http://localhost:3000/logo192.png)',
            }}
          ></div>
          <h5>EN</h5>
        </div>
        <div className="links">
          <div
            className={`link ${
              location === '/Clients' ? 'coloredLink' : 'normal'
            }`}
          >
            <Link
              to="/Clients"
              onClick={() => {
                setClicked(!clicked)
              }}
            >
              <i class="fa-solid fa-users"></i>Clients
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div
            className={`link ${
              location === '/Produits' ? 'coloredLink' : 'normal'
            }`}
          >
            <Link
              to="/Produits"
              onClick={() => {
                setClicked(!clicked)
              }}
            >
              <i className="fa-solid fa-tags"></i>Produits
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div
            className={`link ${
              location === '/Commandes' ? 'coloredLink' : 'normal'
            }`}
          >
            <Link
              to={'/Commandes'}
              onClick={() => {
                setClicked(!clicked)
              }}
            >
              <i class="fa-solid fa-receipt"></i>Commandes
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="foot">
            <div className="link">
              <Link>
                <i className="fas fa-sign-out-alt"></i>Logout
              </Link>
            </div>

            <div className="link">
              <Link>
                <i className="fas fa-sign-in-alt"></i>Log in
              </Link>
            </div>

            <div className="link">
              <Link to="/">
                <i className="fa-solid fa-gear"></i> Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
