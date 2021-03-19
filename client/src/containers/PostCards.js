import React from 'react';
import { PostCard } from '../components';

function PostCards() {
  return (
    <React.Fragment>
      <div className='postcards'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className='divider'></div>
    </React.Fragment>
  );
}
export default PostCards;
