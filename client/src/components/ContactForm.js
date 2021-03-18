import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import { Button } from '../components';
import { send } from 'emailjs-com';
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
  const recaptchaRef = React.useRef(null);

  const sendRequest = (e) => {
    e.preventDefault();
    console.log(inputs);
    const token = recaptchaRef.current.getValue();
    if (token) {
      const serviceID = 'pralma';
      const templateID = 'one';

      send(serviceID, templateID, inputs, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((response) =>
          console.log('SUCCESS', response.status, response.text)
        )
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
            console.log(data);
            //0 - new_members_total_created = 0 if email exists
            //1 - if subscribed successfully
            //{message: "Failed"} if name or email is empty
          })
          .catch((error) => console.log(error));
      }
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
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
          required
        />
        <small className='input-info'>+48 602191607</small>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='email'>
          Email <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='email'
          id='email'
          name='email'
          value={inputs.email}
          onChange={handleInput}
          required
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
        <label className='input-label' htmlFor='content'>
          Treść <span className='input-required'>*</span>
        </label>
        <textarea
          name='content'
          id='content'
          cols='40'
          rows='10'
          placeholder='Wpisz treść zapytania'
          required
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
      <Button label='Wyślij' btnType='submit' />
    </form>
  );
}
export default ContactForm;
