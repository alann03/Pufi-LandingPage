import React from "react";
import TrademarkSVG from "../Assets/svg/trademark.svg";
import QRIMG from "../Assets/img/data-fiscal-image.png";
import ShieldIMG from "../Assets/svg/shield.svg";
import FacebookSVG from "../Assets/svg/facebook.svg";
import InstagramSVG from "../Assets/svg/instagram.svg";
import TwitterSVG from "../Assets/svg/twitter.svg";
import BrandLiveLogo from "../Assets/img/brandlive-image.png";
import { FooterCont } from "../Styles/FooterStyle";

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