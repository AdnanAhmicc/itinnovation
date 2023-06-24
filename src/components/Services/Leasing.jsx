import Navbar from '@components/ItInnovation/Navbar'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/leasing.json";

const Leasing = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h1 className="title wow fadeInUp mb-40"> IT INNOVATION LEASING </h1>
              <p className="desc wow fadeInUp mb-40">
                Anpassa hårdvara efter tjänsterna. <br/> Samla alla kostnader i ett smidigt leasingavtal.
              </p>
              <p className="wow fadeInUp mb-20 fw-bold">
                Fri support under avtalsperiod gäller alltid.
              </p>
              <p className="wow fadeInUp mb-20 fst-italic">
                Samla fler tjänster via IT Innovation och få förmånsrabatt
              </p>
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
                <li>Hårdvarupott</li>
                <li>IT Utrustning</li>
                <li>Telefoni</li>
                <li>Övrig Elektronik</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-info">
              <h2 className="title">Tillägstjänster:</h2>
              <ul>
                <li>Försäkring</li>
                <li>Serviceavtal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter title="Vill du veta mer om hur smidigt det kan vara att ha ett leasingavtal via IT Innovation?"/>
    </section>
  )
}

export default Leasing