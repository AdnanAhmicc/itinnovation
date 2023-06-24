import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Swal from 'sweetalert2';

Modal.setAppElement('#__next'); // Set the root element to use for accessibility

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,

  },
  content: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    maxWidth: '700px',
    width: '100%',
    borderRadius: '20px',
    padding: '0',
    border: 'none',
    background: 'none',
  },
};


const MainModal = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orgNumber, setOrgNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [category, setCategory] = useState('');
  const [beneficialProvider, setBeneficialProvider] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('/api/modal', {
        name,
        email,
        orgNumber,
        companyName,
        website,
        numEmployees,
        category,
        beneficialProvider,
        description,
        city,
        country,
      });
    // console.log(response.data); 

      Swal.fire({
        icon: 'FRAMGÅNG',
        title: 'FRAMGÅNG!',
        text: 'E-POSTMEDDELANDET HAR SKICKATS!',
      });

      // Reset the form after successful submission
      setName('');
      setEmail('');
      setOrgNumber('');
      setCompanyName('');
      setWebsite('');
      setNumEmployees('');
      setCategory('');
      setBeneficialProvider('');
      setDescription('');
      setCity('');
      setCountry('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'FEL',
        title: 'FEL!',
        text: 'MISSLYCKADES ATT SKICKA MEDDELANDE.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button style={{ border: 'none', outline: 'none' }} className="butn" onClick={openModal}>
        {props.title}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Kontakta oss:</span>
              </div>
              <div className="app-contact">MOBILNUMMER: 031-318 65 91</div>
            </div>
            <div className="screen-body-item">
              <form onSubmit={handleSubmit}>
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAMN & EFTERNAMN"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="E-POSTADRESS"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="ORG NUMMER"
                      value={orgNumber}
                      onChange={(e) => setOrgNumber(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="FÖRETAGSNAMN"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="HEMSIDA"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="ANTAL ANSTÄLLDA"
                      value={numEmployees}
                      onChange={(e) => setNumEmployees(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="KATEGORI"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="BENEFITLIG LEVERANTÖR"
                      value={beneficialProvider}
                      onChange={(e) => setBeneficialProvider(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="BESKRIV DINA ÖNSKEMÅL"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="STAD"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="LAND"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="button" className="app-form-button">
                      AVBOKA
                    </button>
                    <button
                      type="submit"
                      className="app-form-button"
                      disabled={loading}
                    >
                      {loading ? 'SKICKAR...' : 'SKICKA'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>

  );
};

export default MainModal;
