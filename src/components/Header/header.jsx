import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'
import logo from '../../assets/Logo-GR-XL-Rouge-min.png'
import instagram from '../../assets/logo_insta-min.png'

function Header() {
  return (
    <header className="header_container">
      <div className="header_info">
        <div className="phone_number">06 95 97 50 87</div>
        <div className="insta">
          <Link className="logo_instagram" to="/">
            <img
              className="instagram"
              src={instagram}
              alt="lien instagram Georges Rénovation"
            />
          </Link>
        </div>
      </div>
      <Link className="logo_center" to="/">
        <img
          className="logo"
          src={logo}
          alt="logo Georges Rénovation à Toulouse"
        />
      </Link>

      <div className="nav_container">
        <ul className="navbar">
          <li className="navli">
            <Link className="nav" to="/">
              Accueil
            </Link>
          </li>
          <li className="navli">
            <Link className="nav" to="/about">
              A propos
            </Link>
          </li>
          <li className="navli">
            <Link className="nav" to="/realisations">
              Réalisations
            </Link>
          </li>
          <li className="navli">
            <Link className="nav" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
