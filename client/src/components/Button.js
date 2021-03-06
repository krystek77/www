import { FaArrowRight } from 'react-icons/fa';

function Button({ label, btnType, type, handleClick }) {
  return (
    <button
      type={btnType}
      className={`button ${type ? type : ''}`}
      title={label}
      onClick={handleClick}
    >
      <span className='button__label'>{label}</span>
      <span className='button__arrow'>
        <FaArrowRight className='button__icon' />
      </span>
    </button>
  );
}
export default Button;
