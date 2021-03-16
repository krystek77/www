import React from 'react';
import { Button } from '../components';
function NewsletterForm() {
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const handleName = (e) => {
    const value = e.target.value;
    setUserName(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setUserEmail(value);
  };
  const signupNewsletter = (e) => {
    e.preventDefault();
    console.log('Zarejestruj się do newslettera');
  };
  return (
    <div className='newsletter'>
      <div className='newsletter__image'>
        <img
          className='image'
          src='../assets/images/newsletter.svg'
          alt='newsletter'
        />
        <div className='newsletter__content'>
          <p className='newsletter__text'>
            Zapisz się na newsletter, aby otrzymywać najnowsze wiadomości od
            Pralma oraz informacje o specjalnych ofertach i promocjach.
          </p>
          <small className='info'>Gwarantujemy zero spamu</small>
        </div>
      </div>

      <form className='form form__newsletter' onSubmit={signupNewsletter}>
        <div className='input-group'>
          <label className='input-label' htmlFor='userName'>
            Imię <span className='input-required'>*</span>
          </label>
          <input
            className='input'
            type='text'
            id='userName'
            name='userName'
            onChange={handleName}
            required
            value={userName}
          />
          <small className='input-info'>np. nowak77</small>
        </div>
        <div className='input-group'>
          <label className='input-label' htmlFor='userEmail'>
            Email <span className='input-required'>*</span>
          </label>
          <input
            className='input'
            type='email'
            id='userEmail'
            name='userEmail'
            value={userEmail}
            onChange={handleEmail}
            required
          />
          <small className='input-info'>np. nowak@onet.pl</small>
        </div>
        <Button label='Zapisz się' btnType='submit' type='button__newsletter' />
      </form>
    </div>
  );
}
export default NewsletterForm;
