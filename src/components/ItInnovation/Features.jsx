import Link from 'next/link';
import Lottie from "lottie-react";
import lottieIconArrows from "@lottie/arrows.json";
import MainModal from './MainModal';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="content text-center wow zoomIn">
          <p className="desc text-white">Din digitala företagsutvecklare. Vi ökar omsättning, effektiviserar arbetsflöde och förenklar <br className="d-xlg-block d-none" /> arbetsmetoder med AI, webbutveckling, digital marknadsföring och kommunikation.</p>
        </div>
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="btns mt-40 text-center">
              <MainModal title="FÅ OFFERT" />
              <MainModal title="BOKA STRATEGISAMTAL" />
              <MainModal title="BOKA RÅDGIVNING" />
              <MainModal title="INTRESSEANMÄLLAN" />
              <Link href="/about" legacyBehavior><a className="butn">GUIDER</a></Link>
              <Link href="/about" legacyBehavior><a className="butn">BLOGG</a></Link>
            </div>
          </div>
          <div className="btns mt-40 text-center">
            <Link href="#about" className="butn mx-auto">OM OSS</Link>
          </div>
          <Link href="#about" className="arrow-img mt-60">
            <Lottie animationData={lottieIconArrows} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features;