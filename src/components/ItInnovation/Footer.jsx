import Link from 'next/link';
import Particle from './Particle';
import Lottie from 'lottie-react';
import lottieIconInstagram from "@lottie/instagram.json";
import lottieIconFacebook from "@lottie/facebook.json";
import lottieIconLinkedIn from "@lottie/linkedin.json";
import lottieIconYouTube from "@lottie/youtube.json";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="row gap-0">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="links">
                <div className="cont">
                  <h5 className="link_title">
                    TJÄNSTER & PRODUKTER
                  </h5>
                  <ul>
                    <li><Link href="/telefoni">Telefoni</Link></li>
                    <li><Link href="/bredband">Bredband</Link></li>
                    <li><Link href="/molnvaxel">MolnVäxel [Cloud-PBX]</Link></li>
                    <li><Link href="/omnichannel">Omnichanel [UCaaS]</Link></li>
                    <li><Link href="/webbutveckling">Webbutveckling</Link></li>
                    <li><Link href="/leasing">Leasing</Link></li>
                    <li><Link href="/el">El</Link></li>
                    <li><Link href="/">Solceller</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="links">
                <div className="cont">
                  <h5 className="link_title">
                    KONTAKTCENTER – DIREKT SÄLJ
                  </h5>
                  <ul>
                    <li><Link href="/telefoni">Boka Rådgivning</Link></li>
                    <li><Link href="/bredband">Boka möte för behovsanalys</Link></li>
                    <li><Link href="/molnvaxel">Boka en demo</Link></li>
                    <li><Link href="/omnichannel">Bli kontaktad</Link></li>
                    <li><Link href="/webbutveckling">Prata direkt med säljare</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="links">
                <div className="cont">
                  <h5 className="link_title">
                    KONTAKTCENTER – KUNDTJÄNST
                  </h5>
                  <p><Link href="tel:0313186591" legacyBehavior><a>0313186591</a></Link></p>
                  <p><Link href="mailto:info@itinnovation.se" legacyBehavior><a>info@itinnovation.se</a></Link></p>
                  <h5 className="link_title">
                    FÖLJ OSS – VINN FINA PRISER
                  </h5>
                  <div className="social_icons">
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
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="foot">
              <Link href="/" legacyBehavior>
                <a className="navbar-brand">
                  <img src="/assets/images/logo2.svg" alt="" />
                </a>
              </Link>
              <p className="rights">
                <span>©&nbsp;</span>
                <span className="copyright-year">2023</span>.
                Alla rättigheter förbehållna. Design av <Link href="https://pdfhost.io/v/AkI2Wkuwn_pdf" legacyBehavior><a><b>IT-Innovation Sales & Services Sweden AB</b></a></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Particle />
    </footer>
  )
}

export default Footer;
