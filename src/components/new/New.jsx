import React from "react";
import { useRef } from "react";

import emailjs from "emailjs-com";
import "./new.scss";

const New = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cd6dg6n",
        form.current,
        "user_d4LUsBxZohSbTpew5zOZK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="contacts" id="contacts">
      <h1>Contact</h1>
      <div class="containers contact-row">
        <div class="contact-right">
          <img src="assets/contact.png" alt="" />
        </div>
        <div class="contact-left">
          <h2>Contact via Email</h2>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter Email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <div class="btn-box">
              <button class="common-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
