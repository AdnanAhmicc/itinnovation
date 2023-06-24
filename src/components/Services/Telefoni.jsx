import React from 'react'
import Navbar from '@components/ItInnovation/Navbar'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/telefoni.json";

const Telefoni = () => {
  return (
    <section className="about-services">
      <Navbar/>
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h1 className="title wow fadeInUp mb-40"> Telefoni </h1>
              <h3 className="sub-title wow fadeInUp mb-20"> HUR FUNGERAR TELEFONI HOS IT INNOVATION?</h3>
              <p className="desc wow fadeInUp mb-20">
                Välj mellan flera operatörer. Få skräddarsydd lösning <br className="d-lg-block d-none" />
                anpassad efter behov. Jämför kostnaden hos samtliga <br className="d-lg-block d-none" />
                konkurrenter på motsvarande lösning. Kombinera fritt <br className="d-lg-block d-none" />
                mellan växel och operatör i en och samma helhetslösning. <br className="d-lg-block d-none" />
              </p>
              <p className="wow fadeInUp mb-20 fw-bold">Fri support under avtalsperiod gäller alltid.</p>
              <p className="wow fadeInUp mb-20 fst-italic">Samla fler tjänster via IT Innovation och få förmånsrabatt</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="wow fadeInRight">
            <Lottie animationData={lottieIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Välj mellan:</h2>
              <ul>
                <li>MIRCO-avtal</li>
                <li>RAM-avtal</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Ramavtal</h2>
              <p>Ramavtal är en affärsmodell för:</p>
              <ul>
                <li>1-9 användare + MEX</li>
                <li>10-99 användare</li>
                <li>99-249 användare</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Fördelar:</h2>
              <ul>
                <li>Tydligare avtal med enklare affärsregler och rabatter</li>
                <li>Flexibilitet genom obundna abonnemang</li>
                <li>Hantera abonnemang i självbetjäningsportal</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Välj dina tilläggstjänster:</h2>
              <ul>
                <li>E-sim</li>
                <li>Data kort</li>
                <li>MEX</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Microavtal</h2>
              <p>Microavtal är en affärsmodell för:</p>
              <ul>
                <li>1-9 användare</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Fördelar:</h2>
              <ul>
                <li>Varje nummer har ett avtal och är självständigt</li>
                <li>Går att besöka fysiska butiker vid supportärenden</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="du veta mer om hur vi kan hjälpa ditt företag med smidiga telefonilösningar?" />
    </section>
  )
}

export default Telefoni