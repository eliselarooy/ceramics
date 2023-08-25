import React from 'react';
import abbie from '../images/throwing-andy-priestman-emerge-august-2023.jpg';

const Contact = () => {
  return (
    <div className="contact-page container">
      <div className="contact">
        <p>
          For all enquiries please contact{' '}
          <span>
            <a href="mailto: hello@abbielarooy.com">hello@abbielarooy.com</a>
          </span>
        </p>
        <p>
          Follow{' '}
          <span>
            <a
              href="https://www.instagram.com/abbielarooy/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              @abbielarooy
            </a>
          </span>{' '}
          on Instagram for regular updates.
        </p>
      </div>
      <img src={abbie} alt="Abbie throwing on the wheel" className="abbie" />
    </div>
  );
};

export default Contact;
