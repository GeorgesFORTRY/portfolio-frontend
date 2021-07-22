import { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SContact from './Style';

dotenv.config();

export default function Contact() {
  const [details, setDetails] = useState({
    firstname: '',
    lastname: '',
    structure: '',
    phonenumber: '',
    email: '',
    message: '',
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/contact`, details)
      .then(() => {
        toast(`${details.firstname}, votre message a bien été envoyé`);
        setDetails({
          firstname: '',
          lastname: '',
          structure: '',
          phonenumber: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        toast('Adresse email incorrecte !', { className: 'error' });
      });
  };

  return (
    <SContact id="contact">
      <h1 className="contactTitle">Formulaire de contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="contactpage">
          <div className="firstbloc">
            <div className="firstname">
              <label htmlFor="firstname">
                <input
                  type="text"
                  id="firstname"
                  placeholder="Prénom"
                  name="firstname"
                  value={details.firstname}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="lastname">
              <label htmlFor="lastname">
                <input
                  type="text"
                  id="lastname"
                  placeholder="Nom"
                  name="lastname"
                  value={details.lastname}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="structure">
              <label htmlFor="structure">
                <input
                  type="text"
                  name="structure"
                  placeholder="structure"
                  value={details.structure}
                  onChange={handleChange}
                  id="structure"
                />
              </label>
            </div>
            <div className="phonenumber">
              <label htmlFor="phonenumber">
                <input
                  type="text"
                  id="phonenumber"
                  placeholder="Téléphone"
                  name="phonenumber"
                  value={details.phonenumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="secondbloc">
            <div className="email">
              <label htmlFor="email">
                <input
                  type="text"
                  id="email"
                  placeholder="email@exemple.com"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="message">
              <label htmlFor="message">
                <textarea
                  type="text"
                  id="message"
                  placeholder="Ecrivez votre message..."
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>{' '}
        </div>
        <div className="RGPD">
          <input type="checkbox" required />
          <p>J’accepte de partager mes informations</p>
        </div>
        <div className="button">
          <button type="submit" className="buttoncontact">
            Envoyer
          </button>
          <ToastContainer position="bottom-right" />
        </div>
      </form>
    </SContact>
  );
}
