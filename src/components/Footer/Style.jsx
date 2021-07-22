import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: #2c2875;
  height: 11vh;
  padding-top: 20px;
  color: #ffffff;
  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .networks {
      display: flex;
      justify-content: space-evenly;
      width: 400px;

      img {
        max-width: 40px;
      }
    }
  }
  p {
    padding: 2px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    a:hover {
      color: #61dafb;
    }
  }

  .copyright {
    font-size: 0.8em;
    padding-top: 20px;
    text-align: center;
  }
`;

export default SFooter;
