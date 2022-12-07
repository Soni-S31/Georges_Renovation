import React from 'react'
import './about.css'
import ImgLeft from '../../assets/IMG-seblue-min.jpg'
import ImgRight from '../../assets/IMG-sdb-min.jpg'
import '../../utils/style/globalStyle.css'
import Profil from '../../assets/photo_profil-min.jpg'
import Profil2 from '../../assets/IMG-teeshirt-min.jpg'

function About() {
  return (
    <main className="main-about">
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
        <title className="banner_info">
          <div className="border_banner">
            <h2 className="banner_title">A propos</h2>
          </div>
        </title>
      </article>
      <section className="content">
        <title className="content_intro">
          Georges Rénovation en quelques mots :
        </title>

        <article className="info_display">
          <div className="info_black">
            Je suis Georges Vincent, créateur et gérant de l'entreprise. Georges
            Rénovation a été crée en mars 2021 et s'est fait connaître
            principalement par le bouche à oreille grâce à ses réalisations haut
            de gamme. je maîtrise différents corps de métier pour réaliser vos
            projets de A à Z.{' '}
          </div>
          <div className="info_competences">
            <ul>
              <li>
                Artisan polyvalent, je maîtrise différents corps de métier pour
                vous aider à réaliser vos projets de A à Z.{' '}
              </li>
              <li>
                Engagé à 100% dans vos projets, je suis l’unique interlocuteur
                lors du chantier.{' '}
              </li>
              <li>
                Engagé à 100% dans vos projets, je suis l’unique interlocuteur
                lors du chantier.{' '}
              </li>
              <li>
                Le travail bien fait, des finitions de qualités et la fiabilité
                sont pour moi une priorité.{' '}
              </li>{' '}
            </ul>
          </div>
          <div className="info_img">
            <img
              className="info_img_profil"
              src={Profil}
              alt="Georges Vincent créateur de Georges Rénovation"
            />
            <img
              className="info_img_profil"
              src={Profil2}
              alt="Georges Vincent posant de la faïence"
            />
          </div>
        </article>
      </section>
    </main>
  )
}

export default About
