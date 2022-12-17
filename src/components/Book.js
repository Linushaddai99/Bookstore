import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Api/AsyncThunck';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook({ item_id: id }));
  };
  return (
    <div className="book-container">
      <div className="title-div">
        <small>{book.category}</small>
        <h2 className="title">{book.title}</h2>
        <p className="author">{book.author}</p>
        <div>
          <ul>
            <li>Comment</li>
            <li>
              <button
                type="button"
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                Remove
              </button>
            </li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
      <div className="progress-section">
        <div className="progress-div" />
        <di>
          <h1 className="percentage">64%</h1>
          <p className="completed">Completed</p>
        </di>
      </div>
      <div className="chapter-div">
        <p className="chapter-label">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
