import React from 'react';
import { Button } from '../components';

const emailPattern = /([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

function NewsletterForm() {
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(2);
  const [errors, setErrors] = React.useState({});

  const handleName = (e) => {
    const value = e.target.value;
    setUserName(value);
    setErrors({ ...errors, userName: '' });
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    setErrors({ ...errors, userEmail: '' });
  };

  const signupNewsletter = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!userName) errors.userName = 'Imię nie może być puste';
    if (!userEmail) errors.userEmail = 'Email nie może być pusty';
    if (!userEmail.match(emailPattern))
      errors.userEmail = 'Wpisany email jest niepoprawny';

    if (!Object.keys(errors).length) {
      const userData = {
        name: userName,
        email: userEmail,
      };
      try {
        const response = await fetch('http://localhost:5000/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        const { total_created } = data;
        setSubscribed(total_created);
        setTimeout(function () {
          setSubscribed(2);
          setUserEmail('');
          setUserName('');
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(errors);
    }
  };
  let content = (
    <form className='form form__newsletter' onSubmit={signupNewsletter}>
      <div className='input-group'>
        {errors.userName && <small className='error'>{errors.userName}</small>}
        <label className='input-label' htmlFor='userName'>
          Imię <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='userName'
          name='userName'
          onChange={handleName}
          // required
          value={userName}
        />
        <small className='input-info'>np. nowak77</small>
      </div>
      <div className='input-group'>
        {errors.userEmail && (
          <small className='error'>{errors.userEmail}</small>
        )}
        <label className='input-label' htmlFor='userEmail'>
          Email <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='userEmail'
          name='userEmail'
          value={userEmail}
          onChange={handleEmail}
          // required
        />
        <small className='input-info'>np. nowak@onet.pl</small>
      </div>
      <Button label='Zapisz się' btnType='submit' type='button__newsletter' />
    </form>
  );

  if (subscribed === 1)
    content = (
      <div className='message message--newsletter'>
        <p className='message__title'>Newsletter</p>
        <p className='message__content'>Pomyślnie zapisano na newsletter</p>
        <p className='message__info'>Sprawdź pocztę i odbierz kupon rabatowy</p>
      </div>
    );
  if (subscribed === 0)
    content = (
      <div className='message message--newsletter'>
        <p className='message__title'>Newsletter</p>
        <p className='message__content'>Już się zapisałeś na newsletter</p>
      </div>
    );

  return (
    <React.Fragment>
      <div className='image image--newsletter'>
        <img
          src='../assets/images/newsletter_test.svg'
          alt='newsletter'
          width='96px'
          height='76px'
        />
      </div>
      {content}
    </React.Fragment>
  );
}
export default NewsletterForm;
