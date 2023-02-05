import React from "react";
import "./style.css";

const contact = () => {
  return (
    <section className="form">
      <h1>Pour me contacter</h1>
      <div className="formContent">
        <input type="text" name="firstName" placeholder="Last Name" />
        <input type="text" name="lastName" placeholder="First Name" />
        <input type="mail" name="email" placeholder="Email" />
        <input type="button" value="Envoyer" />
      </div>
    </section>
  );
};

export default contact;
