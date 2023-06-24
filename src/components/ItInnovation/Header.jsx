import Navbar from '@components/ItInnovation/Navbar';

const Header = () => {
  return (
    <header className="video-header">
      <Navbar />
      <div className="video-overlay"></div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/assets/images/header-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="header-content">
        <div className="info">
          <img className="img wow fadeIn" src="/assets/images/logo-icon.png" alt="" />
          <div className="text wow fadeIn">
            <h1 className="title">
              IT INNOVATION <br />
              <span>NETWORK</span>
            </h1>
            <p className="sub-title">framtidens lösningar</p>
          </div>
        </div>
      </div>
      <img src="/assets/images/robothand.svg" alt="" className="robohand wow fadeInRight" />
    </header>
  )
}

export default Header
