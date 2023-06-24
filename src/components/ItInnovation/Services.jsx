import Link from 'next/link';
import Lottie from "lottie-react";
import lottieIconTelefoni from "@lottie/telefoni-icon.json";
import lottieIconEl from "@lottie/el-icon.json";
import lottieIconLeasing from "@lottie/leasing-icon.json";
import lottieIconBredband from "@lottie/bredband-icon.json";
import lottieIconMolnvaxel from "@lottie/cloudpbx-icon.json";
import lottieIconOmnichannel from "@lottie/kontaktcenter-icon.json"
import lottieIconMarknadsfornings from "@lottie/socialmediamarketing-icon.json";
import lottieIconWebbutveckling from "@lottie/webbutveckling-icon.json";
import lottieIconArrows from "@lottie/arrows.json";


const Services = () => {
  const style = {
    height: 250
  };
  return (
    <section id="services" className="services">
      <div className="services-content">
        <div className="container">
          <h1 className="text-center text-white mb-40">TJÄNSTER</h1>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <Link href="/telefoni">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconTelefoni} />
                  </div>
                  <h3> Telefoni </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/el">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconEl} />
                  </div>
                  <h3> El </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/leasing">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconLeasing} />
                  </div>
                  <h3> Leasing </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/bredband">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconBredband} />
                  </div>
                  <h3> Bredband </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/molnvaxel">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconMolnvaxel} />
                  </div>
                  <h3> Molnväxel </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/omnichannel">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconOmnichannel} />
                  </div>
                  <h3> Kontakt center </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/marknadsforning">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconMarknadsfornings} />
                  </div>
                  <h3> Marknadsföring </h3>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link href="/webbutveckling">
                <div className="service-card wow fadeInUp">
                  <div className="img-icon">
                    <Lottie style={style} animationData={lottieIconWebbutveckling} />
                  </div>
                  <h3> Webbutveckling </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="#contact" className="arrow-img mt-40 d-flex align-items-center mx-auto">
        <Lottie animationData={lottieIconArrows} />
      </Link>
    </section>
  )
}

export default Services