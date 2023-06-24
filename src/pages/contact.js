import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [company, setCompany] = useState('');
  const [orgNumber, setOrgNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        number,
        company,
        orgNumber,
        subject,
        title,
        message,
      });
      console.log(response.data); // Optional: log the response from the server

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Email sent successfully!',
      });

      // Reset the form after successful submission
      setName('');
      setEmail('');
      setNumber('');
      setCompany('');
      setOrgNumber('');
      setSubject('');
      setTitle('');
      setMessage('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send email.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close" />
              <div className="screen-header-button maximize" />
              <div className="screen-header-button minimize" />
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
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
                      placeholder="TELEFONNUMMER"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="FÖRETAG"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      placeholder="ÄRENDE"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="TITEL"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MEDDELANDE"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
                      {loading ? 'Skickar...' : 'SKICKA'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
