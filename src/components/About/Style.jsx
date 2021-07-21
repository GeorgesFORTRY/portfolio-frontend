import styled from 'styled-components';

const SAbout = styled.section`
  height: 160vh;
  color: #2c2875;
  margin-top: 120px;
  .career {
    display: flex;
    padding-left: 350px;
    padding-right: 350px;
    position: relative;
    .textcareer {
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
        padding-top: 1.8em;
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
      .btn-career {
        background: linear-gradient(#61dafb, #2c2875);
        border: none;
        text-align: center;
        border-radius: 25px;
        padding: 10px 5px;
        display: block;
        margin-top: 40px;
        margin-left: 150px;
        width: 150px;
        color: #ffffff;
        text-decoration: none;
        box-shadow: 0 0 1px transparent;
      }
      .btn-career:hover {
        width: 155px;
        padding: 15px 10px;
      }
    }

    .imgcoding {
      position: absolute;
      height: 600px;
      width: 800px;
      object-fit: cover;
    }
  }

  .project {
    display: flex;
    padding-left: 350px;
    padding-right: 350px;
    padding-top: 150px;
    position: relative;
    .textproject {
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
        padding-top: 1.5em;
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
      .btn-project {
        background: linear-gradient(#61dafb, #2c2875);
        border: none;
        text-align: center;
        border-radius: 25px;
        padding: 10px 5px;
        display: block;
        margin-top: 30px;
        margin-left: 150px;
        width: 150px;
        color: #ffffff;
        text-decoration: none;
        box-shadow: 0 0 1px transparent;
      }
      .btn-project:hover {
        width: 155px;
        padding: 15px 10px;
      }
    }

    .imgproject {
      position: absolute;
      right: 350px;
      height: 600px;
      width: 800px;
      object-fit: cover;
    }
  }
`;

export default SAbout;
