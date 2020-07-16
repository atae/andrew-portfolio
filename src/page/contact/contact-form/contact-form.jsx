import React from 'react';

export default function ContactForm({pageColor}) {

  return(
  <div id="contact" class="contact-form container">  
      <header className={`${pageColor}-background-font`}>
        <h1>Contact</h1>
      </header>    
    <form action="https://formspree.io/andrewtae368@gmail.com" method="post">
      <fieldset>
        <input placeholder="Your name" name="name" type="text" tabindex="1" required autofocus />
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number (optional)" name="phone" type="tel" tabindex="3" />
      </fieldset>
      <fieldset>
        <input placeholder="Your Web Site (optional)" name="site" type="url" tabindex="4" />
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>
  );
};