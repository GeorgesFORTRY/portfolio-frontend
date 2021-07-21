import styled from 'styled-components';

const SDefinition = styled.section`
  height: 160vh;
  color: #2c2875;
  margin-top: 100px;

  .front-end {
    display: flex;
    padding-left: 350px;
    padding-right: 350px;
    position: relative;
    .textfront {
      position: relative;
      background-color: #fff;
      padding: 3em 4em 6em;
      box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
      z-index: 1;
      width: 400px;
      min-height: 400px;
      max-height: 400px;
      margin-top: 40px;
      margin-left: 650px;
      border-radius: 20% 80% 30% 70%/70% 30% 70% 30%;
      h1 {
        padding-top: 0.8em;
        padding-bottom: 0.6em;
        font-size: 1.9em;
        font-weight: bolder;
      }
      p {
        font-size: 1em;
        line-height: 1.5em;
        span {
          font-weight: bold;
        }
      }
    }
    .imgfront {
      position: absolute;
      height: 600px;
      width: 800px;
      object-fit: cover;
    }
  }

  .back-end {
    display: flex;
    padding-left: 350px;
    padding-right: 350px;
    padding-top: 150px;
    position: relative;
    .textback {
      position: relative;
      background-color: #fff;
      padding: 3em 4em 6em;
      box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
      z-index: 1;
      width: 400px;
      min-height: 400px;
      max-height: 400px;
      margin-top: 40px;
      border-radius: 20% 80% 30% 70%/70% 30% 70% 30%;

      h2 {
        padding-top: 2.5em;
        padding-bottom: 0.8em;
        font-size: 1.9em;
        font-weight: bolder;
      }
      p {
        font-size: 1em;
        line-height: 1.5em;
        span {
          font-weight: bold;
        }
      }
    }

    .imgback {
      position: absolute;
      right: 350px;
      height: 600px;
      width: 800px;
      object-fit: cover;
    }
  }
`;

export default SDefinition;
