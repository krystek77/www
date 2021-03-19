import { Link } from 'react-router-dom';
import { Button } from '../components';
function PostCard({ children }) {
  return (
    <Link to='' className='postcard'>
      <article className='postcard__article'>
        <aside className='image'>
          <img src='../assets/images/news_test_1.jpg' alt='news_test_1' />
        </aside>
        <h3 className='title'>
          Wejdź na wyższy poziom czyszczenia z rozwiązaniam higienicznymi Primus
        </h3>
        <prev className='date'>February 1st, 2021</prev>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam
          ab sit, temporibus modi suscipit alias asperiores veniam earum amet
          quae ex praesentium dolorum consectetur. Obcaecati soluta aut sint
          doloremque?
        </p>
      </article>

      <Button btnType='button' label='Czytaj więcej' type='button--postcard' />
    </Link>
  );
}

export default PostCard;
