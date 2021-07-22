import styled from 'styled-components';

const SContact = styled.section`
  color: #2c2875;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 30px;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  .contactpage {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
    padding: 40px;
    @media (max-width: 600px) {
      flex-direction: column;
      align-content: center;
      width: inherit;
      margin-top: 15px;
      padding: 0;
    }
  }
  p {
    padding: 9px;
  }
  .firstbloc {
    width: 30%;
  }
  input {
    font-size: 0.9em;
    border-radius: 5px;
    border-style: solid;
    border-color: #2c2875;
    border-width: 2px;
    height: 35px;
    width: 100%;
    margin-bottom: 15px;
  }
  .secondbloc {
    width: 30%;
  }
  textarea {
    font-size: 1.1em;
    padding: 5px;
    width: 99%;
    height: 145px;
    border-radius: 5px;
    border-style: solid;
    border-color: #2c2875;
    border-width: 2px;
  }
  .button {
    display: flex;
    justify-content: center;
    height: 37px;
    .buttoncontact {
      display: flex;
      justify-content: center;
      background: linear-gradient(#61dafb, #2c2875);
      border: none;
      text-align: center;
      border-radius: 25px;
      padding: 10px 5px;
      width: 150px;
      color: #ffffff;
      text-decoration: none;
      box-shadow: 0 0 1px transparent;
      cursor: pointer;
    }
    .buttoncontact:hover {
      width: 153px;
      padding: 13px 7px;
    }
  }
  .RGPD {
    display: flex;
    justify-content: center;
    text-align: center;

    input {
      width: 15px;
      height: 30px;
    }
  }
  .Toastify__progress-bar {
    background: #61dafb;
  }
  .Toastify__toast {
    background-color: #2c2875;
    color: #ffffff;
  }
  .Toastify__close-button {
    color: #ffffff;
  }
  .error {
    background-color: #e61937;
    .Toastify__progress-bar {
      background: #ffffff;
    }
  }
`;

export default SContact;
