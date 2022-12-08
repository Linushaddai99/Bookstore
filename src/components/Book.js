import React from 'react';

const Book = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <button type="button">Remove</button>
  </div>
);

export default Book;
