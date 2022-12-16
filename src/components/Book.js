import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Api/AsyncThunck';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook({ item_id: id }));
  };
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button
        type="button"
        onClick={() => {
          handleDelete(book.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Book;
