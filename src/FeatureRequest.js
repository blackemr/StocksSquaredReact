import React from 'react';
import { Header, Footer } from './components/common';
import emailjs from 'emailjs-com';

export default function FeatureRequest() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_twye46e', 'stocks_squared-template', e.target, 'user_RVJaJvC4xExATQMuS4o7c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <Header />
      <div class="container">
        <h2 className="text-center mt-3">Request a Feature</h2>
        <p class="text-center">Stocks Squared gets better by community input. We appreciate the suggestions
        that our community provides!</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Feature description</label>
          <textarea name="message" rows="5"/>
          <input type="submit" class="btn-custom-1" value="Submit Request" />
        </form>
      </div>
      <Footer />
    </>
  );
}