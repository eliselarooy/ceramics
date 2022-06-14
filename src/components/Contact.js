import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <p>
        If you have any questions regarding my work, sales or anything else
        please{' '}
        <span>
          <a href="mailto: abbie_larooy@hotmail.co.uk">get in touch</a>
        </span>
        .
      </p>
      <p>
        You can also follow me on{' '}
        <span>
          <a
            href="https://www.instagram.com/abbielarooy/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </span>{' '}
        where I document my work and process.
      </p>
    </div>
  );
};

export default Contact;
