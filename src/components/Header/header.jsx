import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'
import logo from '../../assets/Logo-GR-XL-Rouge-min.png'
import instagram from '../../assets/logo_insta-min.png'

function Header() {
  return (
    <header className="header_container">
      <div className="hamburger_menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="menu__box">
          <li>
            <a className="menu__item" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a className="menu__item" href="/About">
              A propos
            </a>
          </li>
          <li>
            <a className="menu__item" href="/Realisations">
              Réalisations
            </a>
          </li>
          <li>
            <a className="menu__item" href="/Contact">
              Contact
            </a>
          </li>
          <li>
            <a className="menu__item" href="/">
              <img
                className="instagram"
                src={instagram}
                alt="lien instagram Georges Rénovation"
              />
            </a>
          </li>
        </ul>
      </div>
      <Link className="logo_center" to="/">
        <img
          className="logo"
          src={logo}
          alt="logo Georges Rénovation à Toulouse"
        />
      </Link>

      <title className="header_content">
        <h2 className="header_title">Spécialiste du second oeuvre</h2>
      </title>
    </header>
  )
}
export default Header
