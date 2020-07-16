import React from 'react';
import ContactForm from './contact-form';

export default function Contact({pageColor, content}) {
  return(
    <ContactForm pageColor = {pageColor} content={content}/>
  );
};