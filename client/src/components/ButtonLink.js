import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function ButtonLink({ to, label }) {
  return (
    <Link to={to} className='btn-link' title={label}>
      <span className='btn-link__label'>{label}</span>
      <span className='btn-link__arrow'>
        <FaArrowRight className='btn-link__icon' />
      </span>
    </Link>
  );
}
export default ButtonLink;
