import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImgSlider1 from "../Assets/img/slider-image-1.jpg";
import ImgSlider2 from "../Assets/img/slider-image-2.jpg";
import ImgSlider3 from "../Assets/img/slider-image-3.jpg";
import { FirstViewCont } from "../Styles/FirstViewStyle";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function FirstView() {
  return (
    <FirstViewCont>
      <Carousel
        className="carousel"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        slidesToSlide={1}
        showDots={true}
        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
      >
        <div className="item">
          <div className="textCont">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgSlider1} alt="" />
        </div>
        <div className="item">
          <div className="textCont">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgSlider2} alt="" />
        </div>
        <div className="item">
          <div className="textCont">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgSlider3} alt="" />
        </div>
      </Carousel>
    </FirstViewCont>
  )
}

export default FirstView;