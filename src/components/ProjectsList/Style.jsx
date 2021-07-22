import styled from 'styled-components';

const SProjectsList = styled.section`
  color: #2c2875;
  padding-top: 12vh;

  .gallery {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 50px;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;

export default SProjectsList;
