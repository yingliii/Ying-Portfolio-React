import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <h4 className='contact-heading'>Contact Me</h4>
      <hr />
      <div className='contact-body'>
        <form id='contact-form' onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label' htmlFor='name'>
              Name:
            </label>
            <input
              className='input'
              type='text'
              name='name'
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className='field'>
            <label className='label' htmlFor='email'>
              Email:{' '}
            </label>
            <input
              className='input'
              type='email'
              name='email'
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className='field'>
            <label className='label' htmlFor='message'>
              Message:
            </label>
            <textarea
              className='textarea input'
              name='message'
              rows='5'
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className='is-danger'>{errorMessage}</p>
            </div>
          )}
          <button
            className='button is-medium is-primary is-fullwidth'
            data-testid='button'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
