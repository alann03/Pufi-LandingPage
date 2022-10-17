import React from "react";
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImgSlider1 from "../Assets/img/slider-image-1.jpg";
import ImgSlider2 from "../Assets/img/slider-image-2.jpg";
import ImgSlider3 from "../Assets/img/slider-image-3.jpg";

const FirstViewCont = styled.div`
  .carousel {
    height: 100vh;

    .react-multi-carousel-track{
      height: 100%;
    }

    .react-multi-carousel-dot-list{
      margin-bottom: 1.5%;
      transform: scale(1.5);
    }

    .item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }

      .textCont {
        font-size: xx-large;
        width: 38%;
        text-align: center;
        position: absolute;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & h1 {
          text-transform: uppercase;
          color: #FFFFFF;
          line-height: 100%;
          text-shadow: 2px 2px #909090;
          font-weight: 500;
        }
        & button {
          text-transform: uppercase;
          color: #FFFFFF;
          background: none;
          transform: scale(3);
          border: #FFFFFF solid 1px;
          font-size: 0.4rem;
          padding: 1% 2.5%;
          :hover {
            transition: 1s;
            background: #FFFFFF;
            opacity: 80%;
            color: black;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

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