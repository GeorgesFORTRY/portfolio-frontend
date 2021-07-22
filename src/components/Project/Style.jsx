import styled from 'styled-components';

const SProject = styled.section`
  color: #2c2875;
  border-radius: 5%;
  box-shadow: 0.5rem 0.5rem 5rem 0.7rem rgb(0 0 0 / 13%);
  width: 38vw;
  height: calc(9 / 16 * 38vw);
  margin: 40px;
  .illustration {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      border-radius: 20%;
      padding: 20px;
      max-width: 300px;
      max-height: 200px;
    }
  }
  h2,
  h3 {
    font-size: 1.5em;
    padding: 20px;
  }

  .description {
    width: 70%;
    margin: 10px auto;
  }
  .text {
    font-size: 1.3em;
    text-align: center;
  }

  .link {
    display: flex;
    justify-content: center;
    background: linear-gradient(#61dafb, #2c2875);
    border: none;
    text-align: center;
    border-radius: 25px;
    margin: 20px auto;
    padding: 10px 5px;
    width: 150px;
    color: #ffffff;
    text-decoration: none;
    box-shadow: 0 0 1px transparent;
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
`;

export default SProject;
