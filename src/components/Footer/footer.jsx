import { Link } from 'react-router-dom'
import React from 'react'
import './footer.css'
import LogoWhite from '../../assets/Logo-GR-XL-Blanc-min.png'
import facebook from '../../assets/facebook-min.png'
import instagram from '../../assets/logo_insta-min.png'

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
        <address className="footer_adresse">
          24 rue Bernadette - 31 100 Toulouse
        </address>
        <address className="footer_adresse">
          <a href="mailto:georges.renovation31@gmail.com">
            georges.renovation31@gmail.com
          </a>
        </address>
        <address className="footer_adresse">
          <a href="tel:+33695975087"> 05 95 97 50 87 </a>
        </address>
        <p>Siren : 898572698 APE: 4322B</p>
      </div>
    </footer>
  )
}
export default Footer
