import styled from 'styled-components';

const SSlider = styled.section`
  color: #2c2875;
  h1 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 50px;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
  .Carousel {
    margin: auto;
    height: 20vh;
    .react-multiple-carousel__arrow--left {
      left: 10px;
    }
    .react-multiple-carousel__arrow--right {
      right: 10px;
    }
    .slide {
      display: flex;
      align-items: center;
      overflow: hidden;
      margin: auto;
      width: 10vw;
      height: 15vh;
      @media (max-width: 600px) {
        width: 30vw;
        height: 35vh;
      }
      img {
        display: block;
        max-height: 100%;
        max-width: 100%;
        filter: grayscale(100%);
        margin: auto;
      }
      img:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

export default SSlider;
