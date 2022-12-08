import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book book={book} key={book.id} />
    ))}
  </div>
);

export default BookList;
