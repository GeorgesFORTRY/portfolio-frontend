import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2875;
  padding-left: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  width: 100vw;
  height: 9vh;
  box-sizing: border-box;
  box-shadow: 0px 4px 7px rgba(64, 65, 69, 0.3);

  .logo-name {
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    .logo {
      height: 4vh;
      width: auto;
    }
  }

  .menu {
    list-style-type: none;
    padding-right: 40px;
    .barre {
      display: flex;
    }
    .item {
      color: #61dafb;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
  }

  .item:hover {
    color: darkred;
    font-weight: bold;
  }
  .item:active {
    color: gold;
  }
`;

export default SHeader;
