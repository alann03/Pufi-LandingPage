import React, { useState } from "react";
import RightArrow from "../Assets/svg/right-arrow.svg";
import { NewsLetterCont } from "../Styles/NewsLetterStyle";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = input => {
    let error = "";
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input)) error = "Insert a valid email. For example: foo-bar.baz@example.com";
    return error;
  }

  const handleChange = e => {
    setEmail(e.target.value);
    setError(validate(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault(e);
    if (email === "") alert("Email is required");
    else if (error !== "") alert("Insert a valid email");
    // En un caso real, aquí enviaríamos el email
    else alert("Email sent");
  }

  return (
    <NewsLetterCont>
      <h4>NEWSLETTER</h4>
      <h2>SUSCRIBITE</h2>
      <span>Y enterate de todas las novedades</span>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" placeholder="Ingresa tu email" value={email} onChange={e => handleChange(e)} ></input>
        <button type="submit">
          <img src={RightArrow} alt="" />
        </button>
      </form>
      <span className="error">⠀{error}</span>
    </NewsLetterCont>
  )
}

export default NewsLetter;