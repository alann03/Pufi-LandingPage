import styled from "styled-components";

export const NavCont = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding-top: 1%;
  box-shadow: inset 0px 88px 43px -20px rgb(0 0 0 / 25%);

  .navTitle {
    display: flex;
    align-items: center;
    padding-left: 2%;
    h1{
      font-size: 4.5rem;
      margin: 0;
      color: #FFFFFF;
      font-family: "BandaNova";
    }
    img {
      width: 10px;
      height: 10px;
      filter: invert(100%);
    }
  }

  .iconsCont {
      display: flex;
      text-transform: uppercase;
      color: #FFFFFF;
      padding-right: 2%;
      .itemList {
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 5%;
        flex-direction: column;
        :hover {
          cursor: pointer;
          transform: scale(1.1);
          transition: 0.8s;
        }
        h2 {
          margin: 0;
          text-align: center;
          width: max-content;
          font-weight: 500;
        }
        img {
          width: 65px;
          filter: invert(100%);
        }
      }
  }

  .userCont {
    color: #FFFFFF;
    padding-right: 3%;
    .listCont{
      display: flex;
      padding: 0;
      hr {
          margin: 0px 15px;
        }
      .itemList2{
        list-style-type: none;
        :hover {
          cursor: pointer;
          opacity: 50%;
          transition: 0.5s;
        }
        span {
          margin-right: 7px;
        }
        img {
          width: 10px;
          height: 10px;
          filter: invert(100%);
        }
      }
    }
  }
  
`;
