import Navbar from '@components/ItInnovation/Navbar'
import ServicesFooter from './ServicesFooter'
import Lottie from "lottie-react";
import lottieIcon from "@lottie/socialmediamarketing.json";

const Marknadsforning = () => {
  return (
    <section className="about-services">
      <Navbar />
      <div className="container mt-100">
        <div className="row align-items-center justify-content-between">
          <h1 className="main-title wow fadeInUp mb-40"> IT INNOVATION  Marknadsföring </h1>
          <div className="col-lg-6 col-md-12">
            <div className="info">
              <h3 className="sub-title wow fadeInUp mb-20"> VAD ÄR  Marknadsföring?</h3>
              <p className="desc wow fadeInUp mb-20">
                Framgångsrik digital marknadsföring är avgörande för att företag ska växa online. Med IT Innovations skräddarsydda tjänster kan vi hjälpa dig att nå ut till din målgrupp och maximera din online-närvaro. Genom att använda de senaste digitala kanalerna och strategierna kan vi öka varumärkesmedvetenheten, generera kvalificerad trafik och öka försäljningen. Kontakta oss idag för att ta din digitala marknadsföring till nästa nivå och uppnå konkreta resultat.
              </p>
              <p className="desc wow fadeInUp mb-20">
                Vår expertis sträcker sig över olika digitala marknadsföringsområden, inklusive sociala medier-marknadsföring, sökmotoroptimering (SEO), betald annonsering, innehållsskapande och mycket mer. Vi arbetar med en rad plattformar som Facebook, Twitter, TikTok, YouTube, Google, Bing, Snapchat och LinkedIn för att säkerställa att ditt företag når rätt målgrupp på rätt plats.
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
      <ServicesFooter title="Vill du veta mer om hur smidigt det kan vara att ha ett Marknadsföring via IT Innovation?" />
    </section>
  )
}

export default Marknadsforning