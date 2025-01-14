import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div className="contactContainer">
      <h1 className="contactTitle">Let's connect.</h1>
      <p className="contactDescription">
        I'm currently looking for new opportunities. <br />
        Whether you have a question or just want to know more about me or my work, feel free to reach out! I'd love to hear from you.
      </p>
      <form className="contactForm">
        <div className="contact-form-fields">
          <div className="inputfields">
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
              required
            />
            <textarea
              placeholder="Hey, how's it going?"
              className="contact-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send &gt;
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
