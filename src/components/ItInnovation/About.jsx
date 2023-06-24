import Link from 'next/link'
import Lottie from "lottie-react";
import lottieIconArrows from "@lottie/arrows.json";
import lottieIconAbout from "@lottie/omoss.json";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h1 className="title wow fadeInUp text-white mb-80"> Om oss </h1>
              <p className="desc wow fadeInUp text-white">
                Välkommen till IT Innovation! Vi är din helhetsleverantör
                för IT, kommunikation, webbutveckling, digital
                marknadsföring och SEO. Vårt mål är att förenkla ditt
                arbete, boosta din omsättning och stärka ditt varumärke,
                så att du kan fokusera på din kärnverksamhet.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="wow fadeInRight">
              <Lottie className="mt-40" animationData={lottieIconAbout} />
              <div className="btns mt-20 text-center">
                <Link href="/about" className="butn">Kontakta oss</Link>
                <Link href="/about" className="butn">Boka strategisamtal</Link>
                <Link href="/about" className="butn">Boka rådgivning</Link>
                <Link href="/about" className="butn">Vill du veta mer om oss?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btns mt-40 text-center d-flex flex-column align-items-center">
        <Link href="#" legacyBehavior>
          <a className="butn" style={{ width: "220px", padding: "12px 0", fontSize: "16px" }}>Vill du veta mer om oss?</a>
        </Link>
        <Link href="#services" className="arrow-img mt-40">
          <Lottie animationData={lottieIconArrows} />
        </Link>
      </div>
      <img src="/assets/images/dots-decoration.svg" alt="" className="dots-decoration-left scale_up_down" />
      <img src="/assets/images/dots-decoration.svg" alt="" className="dots-decoration-right scale_up_down" />
      <img src="/assets/images/battery-decoration.svg" alt="" className="battery-decoration" />
    </section>
  )
}

export default About