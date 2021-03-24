import { FaWindowClose } from 'react-icons/fa';
function Modal({ isShow = false, type, handleModal, clearImage, children }) {
  return isShow ? (
    <div
      className={`modal ${type ? type : ''}`}
      onClick={() => {
        handleModal(false);
        clearImage({ src: '', alt: '' });
      }}
    >
      <div className='modal__content'>
        <button
          className='btn btn--close'
          type='button'
          onClick={() => {
            handleModal(false);
            clearImage({ src: '', alt: '' });
          }}
          title='close'
        >
          <FaWindowClose />
        </button>
        {children}
      </div>
    </div>
  ) : null;
}
export default Modal;
