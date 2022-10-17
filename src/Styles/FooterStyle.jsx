import styled from "styled-components";

export const FooterCont = styled.footer`
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