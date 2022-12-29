import React from 'react';
import abbie from '../images/IMG_7247LR.jpg';

const Contact = () => {
  return (
    <div className="contact-page container">
      <div className="contact">
        <p>
          For all enquiries please contact{' '}
          <span>
            <a href="mailto: hello@abbielarooy.com">hello@abbielarooy.com</a>
          </span>
          .
        </p>
      </div>
      <img src={abbie} alt="Abbie throwing on the wheel" className="abbie" />
    </div>
  );
};

export default Contact;
