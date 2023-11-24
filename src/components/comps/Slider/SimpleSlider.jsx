import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

import Card from '../Card/Card';

function Slide() {

    return (
      <Card/>
    )
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "black", right: 0 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: 0 }}
      onClick={onClick}
    />
  );
}


function SimpleSlider () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        
      ]
    };

      
    return (
      <div>
        <h2> Single Item</h2>   
        <Slider {...settings}>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
        </Slider>
        
      </div>
    );

    }

    export default SimpleSlider;