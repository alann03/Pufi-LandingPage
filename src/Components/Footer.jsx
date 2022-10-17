import React from "react";
import styled from "styled-components";
import TrademarkSVG from "../Assets/svg/trademark.svg";
import QRIMG from "../Assets/img/data-fiscal-image.png";
import ShieldIMG from "../Assets/svg/shield.svg";
import FacebookSVG from "../Assets/svg/facebook.svg";
import InstagramSVG from "../Assets/svg/instagram.svg";
import TwitterSVG from "../Assets/svg/twitter.svg";
import BrandLiveLogo from "../Assets/img/brandlive-image.png";

const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;

  .firstCont {
    display: flex;
    margin-top: 7%;
    box-shadow: 5px -8px 28px 1px rgb(0 0 0 / 30%);
    padding: 2.5% 2%;
    .title {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 20%;
    h2{
      font-size: 3.5rem;
      margin: 0;
      font-family: "BandaNova";
    }
    img {
      width: 10px;
      height: 10px;
      margin-top: 6%;
    }
    }
    .list {
      list-style-type: none;
      width: 20%;
      display: flex;
      flex-direction: column;
      font-weight: 600;
      margin: 0;
      border-right: solid 1px #adadad;
      padding: 0 0 0 5%;
      li {
        margin-bottom: 3%;
        :hover{
          opacity: 50%;
          transition: 0.5s;
          cursor: default;
        }
      }
    }
    .safeguard {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: 600;
      width: 20%;
      border-right: solid 1px #adadad;
      padding-left: 5%;
      .garCont {
        display: flex;
        align-items: center;
        .QRIMG {
          width: 2.5rem;
        }
        .ShieldIMG {
          width: 4rem;
          height: 4rem;
          margin-top: 3%;
        }
        span {
          font-style: italic;
          font-weight: 400;
          width: 40%;
        }
      }
    }
    .socialmedia {
      font-weight: 600;
      display: flex;
      flex-direction: row;
      width: 20%;
      padding-left: 5%;
      img {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 3%;
      margin-top: -0.5%;
      :hover{
          opacity: 50%;
          transform: scale(1.2);
          transition: 0.5s;
          cursor: pointer;
        }
      }
    }
  }

  hr {
    width: 96%;
    color: #adadad;
  }

  .secondCont {
    display: flex;
    justify-content: space-between;
    padding: 0.5% 0%;
    span {
      margin-left: 2%;
      color: #adadad;
    }
    img {
      margin-right: 2%;
      width: 8rem;
      height: 1.5rem;
    }
  }
`;

function Footer() {
  return (
    <FooterCont>
      <div className="firstCont">
        <div className="title">
          <h2>Pufi</h2>
          <img src={TrademarkSVG} alt="" />
        </div>
        <ul className="list">
          <li>PUFI RAIN</li>
          <li>PUFI PUFF</li>
          <li>PUFI CART</li>
          <li>PUFI NAP</li>
        </ul>
        <ul className="list">
          <li>CONTACTO</li>
          <li>AYUDA</li>
          <li>CÓMO COMPRAR</li>
          <li>TÉRMINOS & CONDICIONES</li>
        </ul>
        <div className="safeguard">
          <span>COMPRA 100% SEGURA</span>
          <div className="garCont">
            <img className="QRIMG" src={QRIMG} alt="" />
            <img className="ShieldIMG" src={ShieldIMG} alt="" />
            <span>COMPRÁ CON LA GARANTÍA DE PUFI</span>
          </div>
        </div>
        <div className="socialmedia">
          <span>SEGUINOS EN</span>
          <img src={FacebookSVG} alt="" />
          <img src={TwitterSVG} alt="" />
          <img src={InstagramSVG} alt="" />
        </div>
      </div>
      <hr />
      <div className="secondCont">
        <span>PUFI Copyright 2017 - Todos los derechos reservados</span>
        <img src={BrandLiveLogo} alt="" />
      </div>
    </FooterCont>
  )
}

export default Footer;