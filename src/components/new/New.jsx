import React from "react";
import "./new.scss";

const New = () => {
  return (
    <div className="contacts" id="contacts">
      <h1>Contact</h1>
      <div class="containers contact-row">
        <div class="contact-right">
          <img src="assets/contact.png" alt="" />
        </div>
        <div class="contact-left">
          <h2>Contact via Email</h2>
          <form action="">
            <input type="text" placeholder="Enter Email" />
            <textarea placeholder="Message"></textarea>
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
