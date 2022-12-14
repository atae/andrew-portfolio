import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


export default function ContactForm({pageColor, content}) {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const notify = (message) => toast(`Email sent! ${message}`);
  const notifyFail = (error) => toast(`Email sending failed! ${error}`)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eqju8ub', 'template_01tobvm', form.current, 'UFjtnoCbo0vw-FCiw')
      .then((result) => {
          notify(result.text)
          console.log(result.text);
          setMessage('');
          setEmail('');
          setName('');
      }, (error) => {
          notifyFail(error.text);
          console.log(error.text);
      });
  };
  const generateContactMethods = () => { 

        return content.map(contact => {
          let contactLink = contact.contact
    
          if (contact.type === 'email') {
            contactLink = `mailto:${contactLink}`;
          } else if (contact.type === 'phone') {
            contactLink = `tel:${contactLink}`;
          }
    
          return(<a 
            target="_blank"
            rel="noopener noreferrer"
            href={contactLink}>{contact.type}</a>);
        });
      }

  return (
    <>
      <header className={`${pageColor}-background-font`}>
        {/* <h1>Contact</h1> */}
      </header>    
      <div className="contact-methods">
        {generateContactMethods()}
      </div>
      <div id="contact" class={`contact-form container ${pageColor}-background-contact`}>
        <form ref={form} onSubmit={sendEmail}>
          <label class={`${pageColor}-background-font`}>Name</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <label class={`${pageColor}-background-font`}>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label class={`${pageColor}-background-font`}>Message</label>
          <textarea name="message" value={message} onChange={event => setMessage(event.target.value)}/>
          <div class="contact-button-container">
            <button id="contact-submit" type="submit" value="Send"><p>Submit</p></button>
          </div>
        </form>
      </div>
      <Toaster/>
    </>
  );
};


// export default function ContactForm({pageColor, content}) {
//   const generateContactMethods = () => { 

//     return content.map(contact => {
//       let contactLink = contact.contact

//       if (contact.type === 'email') {
//         contactLink = `mailto:${contactLink}`;
//       } else if (contact.type === 'phone') {
//         contactLink = `tel:${contactLink}`;
//       }

//       return(<a 
//         target="_blank"
//         rel="noopener noreferrer"
//         href={contactLink}>{contact.type}</a>);
//     });
//   }
//   return(
//     <>
//       <header className={`${pageColor}-background-font`}>
//         {/* <h1>Contact</h1> */}
//       </header>    
//       <div className="contact-methods">
//         {generateContactMethods()}
//       </div>
//     <div id="contact" class={`contact-form container ${pageColor}-background-contact`}>
//       <h1 className={`${pageColor}-background-font`}>Contact Form</h1>  
//       <form action="https://formspree.io/andrewtae368@gmail.com" method="post">
//         <fieldset>
//           <input placeholder="Your name" name="name" type="text" tabindex="1" required autofocus />
//         </fieldset>
//         <fieldset>
//           <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required />
//         </fieldset>
//         <fieldset>
//           <input placeholder="Your Phone Number (optional)" name="phone" type="tel" tabindex="3" />
//         </fieldset>
//         <fieldset>
//           <input placeholder="Your Web Site (optional)" name="site" type="url" tabindex="4" />
//         </fieldset>
//         <fieldset>
//           <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
//         </fieldset>
//         <fieldset>
//           <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   </>
//   );
// };