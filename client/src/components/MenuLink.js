import { NavLink as Link } from 'react-router-dom';
function MenuLink({ mainTo, to, callback, label }) {
  return (
    <li className='submenu__item'>
      <Link
        className='submenu__link'
        to={`${mainTo}${to}`}
        onClick={() => {
          callback ? callback() : () => {};
        }}
      >
        {label}
      </Link>
    </li>
  );
}
export default MenuLink;
