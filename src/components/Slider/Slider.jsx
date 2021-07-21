import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SSlider from './Style';

dotenv.config();

export default function Slider() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/skills`).then(({ data }) => {
      setSkills(data);
    });
  }, []);

  return (
    <SSlider>
      <h1>Mes compétences</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className="Carousel"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={4}
        swipeable
      >
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="slide">
              <img src={skill.logoSrc} alt={skill.logoAlt} />
            </div>
          );
        })}
      </Carousel>
    </SSlider>
  );
}
