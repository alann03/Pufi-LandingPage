import styled from "styled-components";

export const NewsLetterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
		margin: 5% 0% 0% 0%;
		color: #adadad;
		font-size: 1.2rem;
		font-weight: 400;
	}
	h2 {
		margin: 0;
		font-size: 3rem;
		font-weight: 400;
	}
  span {
    font-weight: 500;
  }
  form {
    margin-top: 1%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  input {
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
    padding-left: 2%;
  }
  button {
    position: absolute;
    border: none;
    background: none;
    width: 2%;
    margin-right: 0.5%;
  }
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .error {
    margin-top: 1%;
    color: #e63946;
  }
`;