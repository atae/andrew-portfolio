import React from 'react';

export default function ContactForm() {

  return(
    <article class="contact-form">
      <header>
        <h2>Contact</h2>
      </header>
      <form action="https://formspree.io/andrewtae368@gmail.com" method="post">
        <div class="form-fields">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="8"></textarea>
          <input type="submit" value="Send Message"/>
        </div>
      </form>
    </article>
  );
};