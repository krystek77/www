import React from 'react';
import { PostCard } from '../components';
import { news } from '../fixtures';

function PostCards() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setData(news);
    setLoading(false);
  }, []);
  if (error) return <div>Some error</div>;
  if (loading) return <div>Loading data...</div>;
  if (news.length === 0) return <div>Brak wiadomości</div>;
  return (
    <React.Fragment>
      <div className='postcards'>
        {data.map((item) => {
          return <PostCard key={item.id} {...item} />;
        })}
      </div>
      <div className='divider'></div>
    </React.Fragment>
  );
}
export default PostCards;
