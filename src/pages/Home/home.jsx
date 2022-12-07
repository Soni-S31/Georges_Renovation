import React from 'react'
import './home.css'
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
            className="banner_img"
            src={ImgRight}
            alt="salle d'eau bleue rénovée avec carreaux de ciment"
          />
        </div>
      </article>
      <section className="content">
        <title className="content_intro">
          Vous avez un projet de rénovation, de création pour votre maison,
          Georges Rénovation vous accompagne de la conception à la réalisation
          de votre projet.
        </title>
        <article className="content_display">
          <figure className="content_action">
            <img
              className="content_img"
              src={Sdb}
              alt="Logo salle de bain dessiné  noir et blanc"
            />
            <figcaption className="content_txt">
              Conception & Rénovation de salle de bain
            </figcaption>
          </figure>
          <figure className="content_action">
            <img
              className="content_img"
              src={Carrelage}
              alt="Logo carrelage et faïence dessiné  noir et blanc"
            />
            <figcaption className="content_txt">Carrelage / Faïence</figcaption>
          </figure>
          <figure className="content_action">
            <img
              className="content_img"
              src={Cuisine}
              alt="Logo cuisine dessiné noir et blanc"
            />
            <figcaption className="content_txt">Cuisine</figcaption>
          </figure>
        </article>
        <article className="info_display">
          <p className="info_black">
            Afin de répondre au mieux à vos demandes, vous pouvez nous joindre :{' '}
          </p>
          <address className="info_red">
            <a href="mailto:georges.renovation31@gmail.com">
              georges.renovation31@gmail.com
            </a>
          </address>
          <address className="info_red">
            <a href="tel:+33695975087"> 05 95 97 50 87 </a>
          </address>
          <p className="info_black">
            N’hésitez pas à laisser un message ou exposer votre projet, nous
            vous contacterons au plus vite.{' '}
          </p>
        </article>
      </section>
    </main>
  )
}

export default Home
