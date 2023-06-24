import Navbar from '@components/ItInnovation/Navbar';
import ServicesFooter from './ServicesFooter';
import Lottie from "lottie-react";
import lottieIcon from "@lottie/el.json";

const El = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h1 className="title wow fadeInUp mb-40"> IT INNOVATION EL </h1>
              <p className="desc wow fadeInUp mb-40">
              Få hjälp att hitta rätt El Avtal. Ta del av våra förmåner när du samlar fler tjänster via IT Innovation.
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
                <li>Liten förbrukning</li>
                <li>Medelstor förbrukning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur vi kan hjälpa dig få ett bättre EL- Avtal?"/>
    </section>
  )
}

export default El