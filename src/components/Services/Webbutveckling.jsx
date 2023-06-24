import Navbar from '@components/ItInnovation/Navbar'
import React from 'react'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/webbutveckling.json";

const Webbutveckling = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <h1 className="main-title wow fadeInUp mb-40"> IT INNOVATION WEBBUTVECKLING </h1>
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h3 className="sub-title wow fadeInUp mb-20"> VAD ÄR WEBBUTVECKLING?</h3>
              <p className="desc wow fadeInUp mb-40">
                Webbutveckling är processen att skapa webbapplikationer som kan
                köras på internet. Det innefattar användning av webbteknologier som
                HTML, CSS och JavaScript för att skapa interaktiva
                användargränssnitt, samt server-sidans teknologier som
                PHP, Python eller Ruby för att hantera och bearbeta data.
                Web programering kan också inkludera databasdesign och -hantering,
                serveradministration och versionshantering för att effektivisera
                utvecklingsprocessen. Syftet med web programering är att skapa
                applikationer som kan nås från vilken enhet som helst som är
                ansluten till internet, inklusive datorer, mobiltelefoner och surfplattor.
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
          <div className="col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Välj dina tjänster efter behov:</h2>
              <ul>
                <li>Websida med informationen</li>
                <li>Websida med webbshop</li>
                <li>Websida med sistemet</li>
                <li>Säljstrategi</li>
                <li>Designpaketet</li>
                <li>Menyval</li>
                <li>Analytics</li>
                <li>Chatt</li>
                <li>MEX</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Välj dina tjänster för marknadsföring:</h2>
              <ul>
                <li>Social media marknadsföring paket</li>
                <li>Utforma en strategi</li>
                <li>Materialskapande</li>
                <li>Sociala nätverk</li>
                <li>Inlägg per vecka</li>
                <li>Månadsrapport</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur vi kan hjälpa dig få ett bättre webbutveckling?"/>
    </section>
  )
}

export default Webbutveckling