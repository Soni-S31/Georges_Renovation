import React from 'react'
import './home.css'
import ImgLeft from '../../assets/IMG-seblue-min.jpg'
import ImgRight from '../../assets/IMG-sdb-min.jpg'
import '../../utils/style/globalStyle.css'
import Sdb from '../../assets/salle-de-bains-min.png'
import Carrelage from '../../assets/carrelage-min.png'
import Cuisine from '../../assets/meuble-de-cuisine-min.png'

function Home() {
  return (
    <main className="main-home">
      <article className="banner">
        <div className="banner_container">
          <img
            className="banner_img_left"
            src={ImgLeft}
            alt="salle d'eau bleue rénovée avec carreaux de ciment"
          />
          <img
            className="banner_img_right"
            src={ImgRight}
            alt="salle d'eau bleue rénovée avec carreaux de ciment"
          />
        </div>
        <div className="banner_info">
          <div className="border_banner">
            <h2 className="banner_title">Spécialiste du second oeuvre</h2>
          </div>
          <div className="border_banner">
            <h3 className="banner_city">Toulouse et ses environs</h3>
          </div>
        </div>
      </article>
      <article className="content">
        <div className="content_intro">
          <p>
            Vous avez un projet de rénovation, de création pour votre maison,
            Georges Rénovation vous accompagne de la conception à la réalisation
            de votre projet.
          </p>
        </div>
        <div className="content_display">
          <div className="content_action">
            <img
              className="sdb_img"
              src={Sdb}
              alt="Logo salle de bain dessiné  noir et blanc"
            />
            <p className="sdb_txt">Conception & Rénovation de salle de bain</p>
          </div>
          <div className="content_action">
            <img
              className="carrelage_img"
              src={Carrelage}
              alt="Logo carrelage et faïence dessiné  noir et blanc"
            />
            <p className="carrelage_txt">Carrelage / Faïence</p>
          </div>
          <div className="content_action">
            <img
              className="cuisine_img"
              src={Cuisine}
              alt="Logo cuisine dessiné noir et blanc"
            />
            <p className="carrelage_txt">Carrelage / Faïence</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Home
