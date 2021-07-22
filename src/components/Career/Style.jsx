import styled from 'styled-components';

const SCareer = styled.section`
  color: #2c2875;
  padding-top: 12vh;
  height: 140vh;
  h5 {
    padding-left: 450px;
    font-size: 3.5em;
    font-weight: bold;
    padding-bottom: 50px;
  }
  .aboutme {
    display: flex;
    justify-content: space-evenly;
  }
  .image {
    height: 400px;
    box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
    border-radius: 5%;
    img {
      max-height: 100%;
      border-radius: 5%;
    }
  }
  .description {
    .profil {
      font-size: 1.2em;
      box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
      border-radius: 5%;
      width: 65%;
      padding: 20px;
      margin: 20px auto;
    }
    .softskills {
      padding-top: 10px;
      display: flex;
      justify-content: space-evenly;

      .qualities {
        box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
        padding: 15px;
        border-radius: 5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        .ecoute {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .rigueur {
          grid-column-start: 5;
          grid-column-end: 6;
          grid-row-start: 4;
          grid-row-end: 5;
        }
        .autonomie {
          grid-column-start: 0;
          grid-column-end: 1;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        .fiabilite {
          grid-column-start: 6;
          grid-column-end: 7;
          grid-row-start: 5;
          grid-row-end: 6;
        }
        .reflechi {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 6;
          grid-row-end: 7;
        }
        .esprit {
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .observateur {
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 5;
          grid-row-end: 6;
        }
        .analyse {
          grid-column-start: 5;
          grid-column-end: 6;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        h1 {
          grid-column-start: 2;
          grid-column-end: 5;
          grid-row-start: 3;
          grid-row-end: 4;
          font-size: 1.3em;
          font-weight: bold;
        }
      }
      .interest {
        box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
        padding: 10px;
        border-radius: 5%;
        h2 {
          padding: 10px;
          text-align: center;
          font-size: 1.3em;
          font-weight: bold;
        }
        p {
          margin: 10px;
        }
      }
    }
  }
  span {
    font-weight: bold;
  }
  .experience {
    box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
    padding: 20px;
    border-radius: 5%;
    width: 60%;
    margin: 40px auto;
    height: 25%;
    h3 {
      font-size: 2em;
      font-weight: bold;
    }
    p {
      padding-top: 20px;
      font-size: 1.2em;
    }
  }
  .formation {
    box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
    padding: 20px;
    border-radius: 5%;
    width: 60%;
    margin: 20px auto;
    height: 21%;
    h4 {
      font-size: 2em;
      font-weight: bold;
    }
    p {
      padding-top: 20px;
      font-size: 1.2em;
    }
  }
`;

export default SCareer;
