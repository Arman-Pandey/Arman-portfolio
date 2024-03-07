import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_av9x618', 'template_cscsexe', form.current, {
        publicKey: '4GHJ2qTt_mJqXQw1O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        );
      };
  const currentYear = new Date().getFullYear();
  return (
    <div className="contact-us-page">
      <section id="contact" className="resume-section">
  <div className="resume-section-content">
    <h2 className="mb-5">Contact Us</h2>
    <div className="subheading mb-3">We'd love to hear from you!</div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <form ref={form} onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="to_name"
                placeholder="Name"
                required="required"
                data-validation-required-message="Please enter your name."
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Email Address</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="from_name"
                placeholder="Email Address"
                required="required"
                data-validation-required-message="Please enter your email address."
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <label>Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                name="message"
                placeholder="Message"
                required="required"
                data-validation-required-message="Please enter a message."
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div className="form-group">
            <button
              type="submit"
              value="Send"
              className="btn btn-primary btn-xl"
              id="sendMessageButton"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<div className="container text-center">
        &copy; {currentYear} Arman Pandey. All Rights Reserved.
      </div>
    </div>
  );
}

export default ContactUs;
