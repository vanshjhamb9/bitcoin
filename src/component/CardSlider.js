import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card'; 
import image2 from "../images/Image1.png";
import image3 from "../images/Image2.png";
import image4 from "../images/Image3.png";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots:true,
        },
      },
    ],
  };

  return (
    <Slider className='grid grid-col-3 gap-4 py-4 px-4' {...settings}>
      <div className='rounded-xl shadow-lg'>
        <Card image={image2} subheading={"Learn and earn $CKB"} heading={"Take a quiz"} />
      </div>
      <div className='rounded-xl shadow-lg'>
        <Card image={image3} heading={"Portfolio"} subheading={"Track your trades in one place, not all over the place"} />
      </div>
      <div className='rounded-xl shadow-lg'>
        <Card image={image4} heading={"Portfolio"} subheading={"Track your trades in one place, not all over the place"} />
      </div>
    </Slider>
  );
};

export default CardSlider;
