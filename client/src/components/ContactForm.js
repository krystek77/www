import React from 'react';
import { Button } from '../components';
function ContactForm() {
  const [inputs, setInputs] = React.useState({});
  const [isNewsletter, setIsNewsletter] = React.useState(false);

  const sendRequest = (e) => {
    e.preventDefault();
    console.log('request');
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
          Temat <span className='input-required'>*</span>
        </label>
        <select
          className='select'
          id='reason'
          name='reason'
          onChange={handleInput}
          required
        >
          <option className='select__option' value='' disabled>
            -- określ temat --
          </option>
          <option className='select__option' value='1'>
            Zapytanie o cenę
          </option>
          <option className='select__option' value='2'>
            Wsparcie techniczne
          </option>
          <option className='select__option' value='3'>
            Ogólne zapytanie
          </option>
          <option className='select__option' value='4'>
            Dokumenty księgowe
          </option>
          <option className='select__option' value='5'>
            Inne
          </option>
        </select>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='market'>
          Rynek <span className='input-required'>*</span>
        </label>
        <select
          className='select'
          id='market'
          name='market'
          onChange={handleInput}
          required
        >
          <option className='select__option' value='' disabled>
            -- określ rynek --
          </option>
          <option className='select__option' value='1'>
            Hotel, pensjonat
          </option>
          <option className='select__option' value='2'>
            Opieka długoterminowa
          </option>
          <option className='select__option' value='3'>
            Szpital
          </option>
          <option className='select__option' value='4'>
            Przemysł
          </option>
          <option className='select__option' value='5'>
            Klub sportowy
          </option>
          <option className='select__option' value='6'>
            Służba cywilna
          </option>
          <option className='select__option' value='7'>
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
          required
        />
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='lastName'>
          Nazwisko <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='lastName'
          name='lastName'
          onChange={handleInput}
          required
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
          onChange={handleInput}
          required
        />
        <small className='input-info'>biuro@pralma.pl</small>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='company'>
          Firma / Instytucja <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='company'
          name='company'
          onChange={handleInput}
          required
        />
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='address'>
          Adres <span className='input-required'>*</span>
        </label>
        <input
          className='input'
          type='text'
          id='address'
          name='address'
          onChange={handleInput}
          required
        />
        <small className='input-info'>25-651 Kielce, ul.Górnicza 49a</small>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='country'>
          Państwo <span className='input-required'>*</span>
        </label>
        <select
          className='select'
          id='country'
          name='country'
          onChange={handleInput}
          required
        >
          <option className='select__option' value='' disabled>
            -- określ państwo --
          </option>
          <option className='select__option' value='1'>
            Poland
          </option>
          <option className='select__option' value='2'>
            USA
          </option>
          <option className='select__option' value='3'>
            Russia
          </option>
          <option className='select__option' value='4'>
            Germany
          </option>
          <option className='select__option' value='5'>
            England
          </option>
          <option className='select__option' value='5'>
            Other
          </option>
        </select>
      </div>
      <div className='input-group'>
        <label className='input-label' htmlFor='cooperation'>
          Czy współpracowaliśmy <span className='input-required'>*</span>
        </label>
        <select
          className='select'
          id='cooperation'
          name='cooperation'
          onChange={handleInput}
          required
        >
          <option className='select__option' value='' disabled>
            -- wybierz odpowiedź --
          </option>
          <option value='1'>Tak</option>
          <option value='2'>Nie</option>
          <option value='3'>Nie jeste pewny(a)</option>
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
      <Button label='Wyślij' btnType='submit' />
    </form>
  );
}
export default ContactForm;
