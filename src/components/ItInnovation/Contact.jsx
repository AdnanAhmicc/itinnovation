import React from 'react'
import ContactForm from './ContactForm';
import Link from 'next/link';
import Lottie from 'lottie-react'
import lottieIcon from "@lottie/Kontaktcenter-head.json";
import lottieIconInstagram from "@lottie/instagram.json";
import lottieIconFacebook from "@lottie/facebook.json";
import lottieIconLinkedIn from "@lottie/linkedin.json";
import lottieIconYouTube from "@lottie/youtube.json";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head mb-80">
          <h1 className="section-title wow fadeInUp text-white">Kontakt Center</h1>
          <Lottie className="section-img" animationData={lottieIcon} />
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12">
            <div className="info">
              <h5 className="mobile-number wow fadeInUp text-white">MOBILNUMMER</h5>
              <Link href="tel:0313186591">0313186591</Link>
              <h5 className="email wow fadeInUp text-white">E-POSTADRESS</h5>
              <Link href="mailto:info@itinnovation.se">info@itinnovation.se</Link>
              <h5 className="social wow fadeInUp text-white">SOCIAL</h5>
              <div className="icons">
                <Link href="https://instagram.com">
                  <Lottie className="icon" animationData={lottieIconInstagram} />
                </Link>
                <Link href="https://facebook.com">
                  <Lottie className="icon" animationData={lottieIconFacebook} />
                </Link>
                <Link href="https://linkedin.com">
                  <Lottie className="icon" animationData={lottieIconLinkedIn} />
                </Link>
                <Link href="https://youtube.com">
                  <Lottie className="icon" animationData={lottieIconYouTube} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="wow fadeIn">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;