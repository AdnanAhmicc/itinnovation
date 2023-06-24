import Navbar from '@components/ItInnovation/Navbar'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/bredband.json";
const BredBand = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h1 className="title wow fadeInUp mb-40"> IT INNOVATION BREDBAND </h1>
              <p className="desc wow fadeInUp mb-20">
                Välj rätt bredband för ditt företag, mobilt eller fast.
                Anpassa lösningen efter verksamhetens behov.
                Vi hjälper dig att sätta ihop en heltäckande infrastruktur för
                bredbandsuppkoppling som uppfyller hela organisationens behov.
                Jämför olika aktörer på marknaden och få ett förmånligt avtal.
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
                <li>Fast bredband</li>
                <li>Dedikerad fiber</li>
                <li>Mobilt bredband</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur smidigt det kan vara att ha ett leasingavtal via IT Innovation?"/>
    </section>
  )
}

export default BredBand