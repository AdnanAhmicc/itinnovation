import Navbar from '@components/ItInnovation/Navbar'
import React from 'react'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/cloudpbx.json";

const Molnvaxel = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
        <h1 className="main-title wow fadeInUp mb-40"> IT INNOVATION MOLNVÄXEL - CLOUD-PBX </h1>
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h3 className="sub-title wow fadeInUp mb-20"> VAD ÄR CLOUD PBX?</h3>
              <p className="desc wow fadeInUp mb-20">
                Cloud PBX (Privat Bransch Exchange) är ett privat
                växelnätverk som finns i molnet inom organisationen.
              </p>
              <h3 className="sub-title wow fadeInUp mb-20"> HUR FUNGERAR CLOUD PBX?</h3>
              <p className="desc wow fadeInUp mb-20">Välj dina funktioner och få en skräddarsydd växellösning anpassad
                för din bransch och storlek på organisation. Låt företagsväxeln bli en
                del av helhetslösningen. Förenkla vardagen genom smarta lösningar,
                koppla till analyser och interagera, kalendern, CRM-system om så
                önskas. IT Innovation tar fram smarta lösningar som passar just ditt
                företag, implementerar och utbildar personal för en smidig övergång.</p>
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
                <li>Cloud PBX - dator</li>
                <li>Cloud PBX - mobil</li>
                <li>Cloud PBX - dator & mobil</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Några tjänster:</h2>
              <ul>
                <li>Kalenderintegration</li>
                <li>Hänvisning</li>
                <li>Vidarekoppling</li>
                <li>Svarsgrupp</li>
                <li>Inspelning av samtal</li>
                <li>Menyval</li>
                <li>Alternativ nummervisning</li>
                <li>Självbetjäningsportal</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Fördelar:</h2>
              <ul>
                <li>Branschanpassad</li>
                <li>Tid och kostnadseffektiv</li>
                <li>Kommunikations optimerad</li>
                <li>Enkel installation</li>
                <li>Enkel användning</li>
                <li>Enkel administration</li>
                <li>Driftsäker</li>
                <li>Konstant uppdatering av mjukvara</li>
                <li>Flexibilitet</li>
                <li>Ai-Analyser</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Kommunikationskanaler:</h2>
              <ul>
                <li>Telefoni</li>
                <li>Chatt</li>
                <li>Video</li>
                <li>Mejl</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Tjänster för större företag:</h2>
              <ul>
                <li>Wallboard</li>
                <li>Avancerad svarsgrupp</li>
                <li>Kontakt Center</li>
                <li>Analytisk statistik</li>
                <li>Telefonist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur Cloud PBX kan hjälpa ditt företag?"/>
    </section>
  )
}

export default Molnvaxel