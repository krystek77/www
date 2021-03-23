import { MdEmail, MdPhone } from 'react-icons/md';
function Address() {
  return (
    <div className='address'>
      <p className='address__name'>
        Przedsiębiorstwo Produkcji Urządzeń Pralniczych &quot; Pralma &quot; sp.
        z o.o.
      </p>
      <p className='address__street'>25-651 Kielce, ul. Górnicza 49a</p>
      <a className='address__phone' href='tel:+48413450561'>
        <MdPhone className='address__icon' />
        <span className='address__label'>(+48) 41 345 05 61</span>
      </a>
      <a className='address__email' href='mailto:biuro@pralma.pl'>
        <MdEmail className='address__icon' />
        <span className='address__label'>biuro@pralma.pl</span>
      </a>
    </div>
  );
}
export default Address;
