import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';

const BookList = ({books, filter}) => (
  books.filter(book => {
    return (filter.length === 0 || (
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase())
    ))
  })
  .map(book => {
    return(
      <BookListItem key={book._id} title={book.title} author={book.author} />
    )
  })
)


BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default BookList;