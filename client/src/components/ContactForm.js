import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import { Button } from '../components';
import { send } from 'emailjs-com';

const emailPattern = /([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
const phonePattern = /^(\+\d{2,})(\d{3})(\d{4})$/;

function ContactForm() {
  const [inputs, setInputs] = React.useState({
    reason: 'Zapytanie o cenę',
    market: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    country: 'Poland',
    cooperation: '',
    content: '',
  });
  const [isNewsletter, setIsNewsletter] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [isSentRequest, setIsSentRequest] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(2);
  const recaptchaRef = React.useRef(null);

  const sendRequest = (e) => {
    e.preventDefault();
    const errors = {};
    if (!inputs.firstName) errors.firstName = 'Imię nie może być puste';
    if (!inputs.email) errors.email = 'Email nie może być pusty';
    if (!inputs.phone) errors.phone = 'Musisz podać telefon';
    if (!inputs.content) errors.content = 'Wiadomość powinna posiadać treść';

    if (!inputs.phone.match(phonePattern))
      errors.phone = 'Wpisany telefon jest niepoprawny';
    if (!inputs.email.match(emailPattern))
      errors.email = 'Wpisany email jest niepoprawny';
    if (inputs.content.length < 10)
      errors.content = 'Wiadomość musi mieć co najmniej 10 znaków';

    if (!Object.keys(errors).length) {
      const token = recaptchaRef.current.getValue();
      if (token) {
        const serviceID = 'pralma';
        const templateID = 'one';

        send(
          serviceID,
          templateID,
          inputs,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
          .then((response) => {
            setIsSentRequest(true);
            setTimeout(function () {
              setIsSentRequest(false);
              setInputs({
                reason: 'Zapytanie o cenę',
                market: '',
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                address: '',
                country: 'Poland',
                cooperation: '',
                content: '',
              });
            }, 4000);
          })
          .catch((error) => console.log('error'));

        if (isNewsletter) {
          const userData = {
            name: inputs.firstName,
            email: inputs.email,
          };
          fetch('http://localhost:5000/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((data) => {
              const { total_created } = data;
              setSubscribed(total_created);
              setIsNewsletter(false);
            })
            .catch((error) => console.log(error));
        }
      }
    } else {
      setErrors(errors);
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };
  return (
    <form className='form form__contact' onSubmit={sendRequest}>
      <div className='input-group'>
        <label className='input-label' htmlFor='reason'>
          Temat
        </label>
        <select
          className='select'
          id='reason'
          name='reason'
          onChange={handleInput}
          value={inputs.reason}
        >
          <option className='select__option' value='' disabled>
            -- określ temat --
          </option>
          <option className='select__option' value='Zapytanie o cenę'>
            Zapytanie o cenę
          </option>
          <option className='select__option' value='Wsparcie techniczne'>
            Wsparcie techniczne
          </option>
          <option className='select__option' value='Ogólne zapytanie'>
            Ogólne zapytanie
          </option>
          <option className='select__option' value='Dokumenty księgowe'>
            Dokumenty księgowe
          </option>
          <option className='select__option' value='Inne'>
            Inne
          </option>
        </select>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='market'>
          Rynek
        </label>
        <select
          className='select'
          id='market'
          name='market'
          onChange={handleInput}
          value={inputs.market}
        >
          <option className='select__option' value='' disabled>
            -- określ rynek --
          </option>
          <option className='select__option' value='Hotel, pensjonat'>
            Hotel, pensjonat
          </option>
          <option className='select__option' value='Opieka długoterminowa'>
            Opieka długoterminowa
          </option>
          <option className='select__option' value='Szpital'>
            Szpital
          </option>
          <option className='select__option' value='Przemysł'>
            Przemysł
          </option>
          <option className='select__option' value='Klub sportowy'>
            Klub sportowy
          </option>
          <option className='select__option' value='Służba cywilna'>
            Służba cywilna
          </option>
          <option className='select__option' value='Resturacja'>
            Resturacja
          </option>
        </select>
      </div>
      <div className='input-group'>
        {errors.firstName && (
          <small className='error'>{errors.firstName}</small>
        )}
        <label className='input-label' htmlFor='firstName'>
          Imię <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='firstName'
          name='firstName'
          onChange={handleInput}
          // required
          value={inputs.firstName}
        />
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='lastName'>
          Nazwisko
        </label>
        <input
          className='input'
          type='text'
          id='lastName'
          name='lastName'
          onChange={handleInput}
          value={inputs.lastName}
        />
      </div>
      <div className='input-group'>
        {errors.phone && <small className='error'>{errors.phone}</small>}
        <label className='input-label' htmlFor='phone'>
          Telefon <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='tel'
          id='phone'
          name='phone'
          value={inputs.phone}
          onChange={handleInput}
          // required
        />
        <small className='input-info'>+48602191607</small>
      </div>
      <div className='input-group'>
        {errors.email && <small className='error'>{errors.email}</small>}
        <label className='input-label' htmlFor='email'>
          Email <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='email'
          name='email'
          value={inputs.email}
          onChange={handleInput}
          // required
        />
        <small className='input-info'>biuro@pralma.pl</small>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='company'>
          Firma / Instytucja
        </label>
        <input
          className='input'
          type='text'
          id='company'
          name='company'
          value={inputs.company}
          onChange={handleInput}
        />
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='address'>
          Adres
        </label>
        <input
          className='input'
          type='text'
          id='address'
          name='address'
          value={inputs.address}
          onChange={handleInput}
        />
        <small className='input-info'>25-651 Kielce, ul.Górnicza 49a</small>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='country'>
          Państwo
        </label>
        <select
          className='select'
          id='country'
          name='country'
          value={inputs.country}
          onChange={handleInput}
        >
          <option className='select__option' value='' disabled>
            -- określ państwo --
          </option>
          <option className='select__option' value='Poland'>
            Poland
          </option>
          <option className='select__option' value='USA'>
            USA
          </option>
          <option className='select__option' value='Russia'>
            Russia
          </option>
          <option className='select__option' value='Germany'>
            Germany
          </option>
          <option className='select__option' value='England'>
            England
          </option>
          <option className='select__option' value='Other'>
            Other
          </option>
        </select>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='cooperation'>
          Czy współpracowaliśmy
        </label>
        <select
          className='select'
          id='cooperation'
          name='cooperation'
          value={inputs.cooperation}
          onChange={handleInput}
        >
          <option className='select__option' value='' disabled>
            -- wybierz odpowiedź --
          </option>
          <option value='Tak'>Tak</option>
          <option value='Nie'>Nie</option>
          <option value='Nie jestem pewny(a)'>Nie jestem pewny(a)</option>
        </select>
      </div>
      <div className='input-group'>
        {errors.content && <small className='error'>{errors.content}</small>}
        <label className='input-label' htmlFor='content'>
          Treść <span className='input-required'>*</span>
        </label>
        <textarea
          className='textarea'
          name='content'
          id='content'
          cols='40'
          rows='10'
          placeholder='Wpisz treść zapytania'
          // required
          wrap='hard'
          value={inputs.content}
          onChange={handleInput}
        />
      </div>
      <div className='input-group input-group__grid'>
        <input
          type='checkbox'
          id='newsletter-contact'
          name='newsletter-contact'
          checked={isNewsletter}
          className='input'
          onChange={(e) => setIsNewsletter(!isNewsletter)}
        />
        <label className='input-label' htmlFor='newsletter-contact'>
          Zapisz się na newsletter
        </label>
        <p className='info'>Bądź na bieżąco z promocjami oraz wiadomościami</p>
      </div>
      {/** recaptcha */}
      <Recaptcha
        className='recaptcha'
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      />
      {isSentRequest && (
        <div className='message message--request'>
          <div className='message__content'>
            <p className='message__text'>Twoje zapytanie zostało wysłane!</p>
            <p className='message__text'>
              Na skrzynkę otrzymasz potwierdzenie.
            </p>
            {subscribed === 1 && (
              <div className='message--newsletter'>
                <p className='message__text'>Newsletter!</p>
                <p className='message__text'>
                  Dziękujemy, że dołączyłeś do nas.
                </p>
                <p className='message__text'>
                  Zajrzyj na swoją skrzynkę email i odbierz kupon rabatowy.
                </p>
              </div>
            )}
            {subscribed === 0 && (
              <div className='message--newsletter'>
                <p className='message__text'>Newsletter!</p>
                <p className='message__text'>
                  Już z nami jesteś. Dziękujemy...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      <Button label='Wyślij' btnType='submit' />
    </form>
  );
}
export default ContactForm;
