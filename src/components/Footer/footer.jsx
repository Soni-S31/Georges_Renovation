import { Link } from 'react-router-dom'
import React from 'react'
import './footer.css'
import LogoWhite from '../../assets/Logo-GR-XL-Blanc.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/logo_insta.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="lien_reseau">
          <Link className="logo_reso" to="/">
            <img
              className="logo_reso instagram"
              src={instagram}
              alt="lien instagram Georges Rénovation"
            />
          </Link>
          <Link className="logo_reso" to="/">
            <img
              className="logo_reso facebook"
              src={facebook}
              alt="lien facebook Georges Rénovation"
            />
          </Link>
        </div>
        <Link className="logo_center" to="/">
          <img
            className="footer_logo"
            src={LogoWhite}
            alt="logo Georges Rénovation blanc"
          />
        </Link>
      </div>
      <div className="footer_info">
        <p>24 rue Bernadette - 31 100 Toulouse</p>
        <p>georges.renovation31@gmail.com - Tél. : 06 95 97 50 85</p>
        <p>Siren : 898572698 APE: 4322B</p>
      </div>
    </footer>
  )
}
export default Footer
