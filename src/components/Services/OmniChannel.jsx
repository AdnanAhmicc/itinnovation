import Navbar from '@components/ItInnovation/Navbar'
import React from 'react'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/kontaktcenter.json";

const OmniChannel = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <h1 className="main-title wow fadeInUp mb-40"> IT INNOVATION OMNIKANAL [UCAAS] </h1>
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h3 className="sub-title wow fadeInUp mb-20"> VAD ÄR OMNICHANNEL [UCAAS]?</h3>
              <p className="desc wow fadeInUp mb-20">
                OmniChannel samlar all din kommunikation på ett ställe.
                Få fullkomlig kontroll och överblick på samtliga
                kommunikationskanaler och dess trafik. Låt OmniChannel bli din
                nya kommunikationscentral som en samlingsplats för organisationens
                aktiva kommunikationskanaler till ett enda gränssnitt. IT Innovation
                hjälper dig som företagare via gemensam planering, utveckla, förenkla,
                implementera samt utbildning personal för smidig övergång.
              </p>
              <a className="butn my-4">MER OM UCAAS</a>
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
              <h2 className="title">Välj dina tjänster efter behov:</h2>
              <ul>
                <li>Kalenderintegration</li>
                <li>CRM-Integration</li>
                <li>Teams integration</li>
                <li>Fastnummer</li>
                <li>Svarsgrupper</li>
                <li>Menyval</li>
                <li>Analytics</li>
                <li>Chatt</li>
                <li>MEX</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Ingående kanaler:</h2>
              <ul>
                <li>Voice</li>
                <li>Mejl</li>
                <li>Chatt</li>
                <li>Sociala medier</li>
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
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur ett KontaktCenter skulle kunna hjälpa ditt företag?"/>
    </section>
  )
}

export default OmniChannel