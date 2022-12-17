import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook, getBooks } from '../redux/Api/AsyncThunck';

const FormInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const AddBook = async (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'N/A',
    };
    await dispatch(createBook(newBook));
    dispatch(getBooks());

    setTitle('');
    setAuthor('');
  };

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const authorOnChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="form">
      <form>
        <h2 className="form-title">ADD NEW BOOK</h2>
        <input
          type="text"
          name="title"
          onChange={titleOnChange}
          value={title}
          placeholder="Book Title"
          className="title-input"
        />
        <input
          type="text"
          name="author"
          onChange={authorOnChange}
          value={author}
          placeholder="Book Author"
          className="author-input"
        />
        <button type="button" className="form-btn" onClick={AddBook}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default FormInput;
