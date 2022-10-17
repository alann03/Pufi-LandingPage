import React from "react";
import TrademarkSVG from "../Assets/svg/trademark.svg";
import PuffSVG from "../Assets/svg/puff.svg";
import UmbrellaSVG from "../Assets/svg/umbrella.svg";
import CartSVG from "../Assets/svg/cart.svg";
import PillowSVG from "../Assets/svg/pillow.svg";
import DownArrowSVG from "../Assets/svg/down-arrow.svg";
import { NavCont } from "../Styles/NavBarStyle";

function NavBar() {
  return (
    <NavCont>
      <div className="navTitle">
        <h1>Pufi</h1>
        <img src={TrademarkSVG} alt="" />
      </div>
      <div className="iconsCont">
        <li className="itemList">
          <img src={PuffSVG} alt="" />
          <h2>Pufi Puff</h2>
        </li>
        <hr />
        <li className="itemList">
          <img src={UmbrellaSVG} alt="" />
          <h2>Pufi Rain</h2>
        </li>
        <hr />
        <li className="itemList">
          <img src={CartSVG} alt="" />
          <h2>Pufi Cart</h2>
        </li>
        <hr />
        <li className="itemList">
          <img src={PillowSVG} alt="" />
          <h2>Pufi Nap</h2>
        </li>
      </div>
      <div className="userCont">
        <ul className="listCont">
          <li className="itemList2">
            <span>MI CUENTA</span>
            <img src={DownArrowSVG} alt="" />
          </li>
          <hr />
          <li className="itemList2">
            <span>MI COMPRA</span>
          </li>
        </ul>
      </div>
    </NavCont>
  )
}

export default NavBar;