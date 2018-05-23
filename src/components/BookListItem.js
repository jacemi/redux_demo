import React from 'react';
import PropTypes from 'prop-types';

const BookListItem = ({ title, author }) => (
  <div className="book"> 
  <h3>{title}</h3>
  <p>{author}</p>
</div>
);

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired

};

export default BookListItem;