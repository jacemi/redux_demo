import React from 'react';
import BookListItem from './BookListItem';
import BookList from './BookList';

const FeaturedBook = ({ book }) => {
  
  return (
    <div className="featured">
      <BookListItem title={book.title} author={book.author} />
    </div>
  )
}

export default FeaturedBook