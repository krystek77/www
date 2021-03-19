import { Link } from 'react-router-dom';
import { Button } from '../components';

const limitToWords = (str, limit) => {
  return str.split(' ').slice(0, limit).join(' ') + ' [...]';
};

function PostCard(props) {
  const { title, date, description, image, to } = props;

  return (
    <Link to={to} className='postcard'>
      <article className='postcard__article'>
        <aside className='image'>
          <img
            src={`../assets/images/${image.src}.jpg`}
            alt={image.alt}
            width='720px'
            height='450px'
          />
        </aside>
        <h3 className='title'>{title}</h3>
        <span className='date'>{date}</span>
        <p className='description'>{limitToWords(description, 25)}</p>
      </article>

      <Button btnType='button' label='Czytaj więcej' type='button--postcard' />
    </Link>
  );
}

export default PostCard;
