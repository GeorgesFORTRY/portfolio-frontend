import styled from 'styled-components';

const SIntroduction = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .name {
    color: #2c2875;
    font-weight: bold;
    font-size: 65px;
  }

  .capacity {
    color: white;
    font-size: 45px;
    background-color: #2c2875;
    padding: 3em;
    box-shadow: 0.5rem 0.5rem 5rem 0.7rem;
    width: 500px;
    max-height: 500px;
    border-radius: 20% 80% 30% 70%/70% 30% 70% 30%;
    h1 {
      margin-bottom: 20px;
    }
    h2 {
      padding-left: 50px;
    }
  }
`;

export default SIntroduction;
