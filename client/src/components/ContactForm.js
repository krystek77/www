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
  const [isSendingData, setIsSendingData] = React.useState(false);
  const recaptchaRef = React.useRef(null);

  const sendRequest = (e) => {
    e.preventDefault();
    /** simple validation */
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

    const clearFields = () => {
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
    };

    if (!Object.keys(errors).length) {
      setIsSendingData(true);
      const token = recaptchaRef.current.getValue();
      if (token) {
        const serviceID = 'pralma';
        const templateID = 'one';

        const sendEmail = async () => {
          try {
            const response = await send(
              serviceID,
              templateID,
              inputs,
              process.env.REACT_APP_EMAILJS_USER_ID
            );
            return response;
          } catch (error) {
            return error;
          }
        };

        const subscribeNewsletter = async () => {
          const userData = {
            name: inputs.firstName,
            email: inputs.email,
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
            return data;
          } catch (error) {
            return error;
          }
        };

        if (isNewsletter) {
          const request = sendEmail();
          const newsletter = subscribeNewsletter();
          Promise.all([request, newsletter])
            .then((response) => {
              setIsSendingData(false);
              const reqNewsletter = response[1];
              const { total_created } = reqNewsletter;
              setIsSentRequest(true);
              setSubscribed(total_created);
              setTimeout(function () {
                setIsSentRequest(false);
                clearFields();
                setIsNewsletter(false);
                setSubscribed(2);
              }, 4000);
            })
            .catch((error) => console.log(error));
        } else {
          const request = sendEmail();
          request
            .then(() => {
              setIsSendingData(false);
              setIsSentRequest(true);
              setTimeout(function () {
                setIsSentRequest(false);
                clearFields();
              }, 4000);
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
      {isSendingData && (
        <div className='message message--data-sending'>
          <p className='message__title'>Trwa wysyłanie danych ...</p>
        </div>
      )}
      {isSentRequest && (
        <div className='message message--request'>
          <p className='message__title'>Zapytanie</p>
          <p className='message__content'>Twoje zapytanie zostało wysłane</p>
          <p className='message__info'>
            Na skrzynkę pocztową wyslaliśmy potwierdzenie
          </p>
        </div>
      )}
      {subscribed === 1 && (
        <div className='message message--subscription message--btop-dark'>
          <p className='message__title'>Newsletter</p>
          <p className='message__content'>Pomyślnie zapisano na newsletter</p>
          <p className='message__info'>
            Sprawdź pocztę i odbierz kupon rabatowy
          </p>
        </div>
      )}
      {subscribed === 0 && (
        <div className='message message--subscription message--btop-dark'>
          <p className='message__title'>Newsletter</p>
          <p className='message__content'>Już się zapisałeś na newsletter</p>
        </div>
      )}
      <Button label='Wyślij' btnType='submit' />
    </form>
  );
}
export default ContactForm;
